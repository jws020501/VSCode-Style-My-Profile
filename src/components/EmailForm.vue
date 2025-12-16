<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form ref="formRef" autocomplete="off" @submit.prevent="sendEmail">
    <h2 class="emailform_title">Send Email 📨</h2>
    <p class="emailform_subtitle"><em>저와 함께 멋진 프로젝트를 만들고 싶으신분은 메일 부탁드립니다</em></p>
    <div class="emailform_wrap">
      <div class="emailform_item">
        <div class="form_wrap">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div class="form_wrap">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div class="form_wrap">
          <label>Subject</label>
          <input type="text" name="subject" required />
        </div>
      </div>
      <div class="emailform_item">
        <div class="form_wrap form_wrap_msg">
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <input type="submit" :value="sendMsg" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const sendMsg = ref('Send');
const formRef = ref(null);

const emailPublicKey = process.env.VUE_APP_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const emailServiceId = process.env.VUE_APP_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.VUE_APP_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const sendEmail = () => {
  if (!formRef.value) return;
  sendMsg.value = 'Sending mail';

  emailjs
    .sendForm(`${emailServiceId}`, `${emailTemplateId}`, formRef.value, `${emailPublicKey}`)
    .then(() => {
      sendMsg.value = 'Success!';
      formRef.value.reset();
      setTimeout(() => {
        sendMsg.value = 'Send';
      }, 2000);
    })
    .catch(() => {
      sendMsg.value = 'Failed..';
      setTimeout(() => {
        sendMsg.value = 'Send';
      }, 2000);
    });
};
</script>
