<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CodeBlock>
    <CodeLine>
      <TagOpen tagname="html" attr="lang" attrValue="&quot;ko&quot;" />
    </CodeLine>

    <CodeLine>
      <TagOpen tagname="head" :indent="2" />
    </CodeLine>

    <CodeLine>
      <TagOpen tagname="title" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagContents :indent="4">
        안녕하세요, 풀스택개발자를 꿈꾸는 조원석입니다! 💻
      </TagContents>
    </CodeLine>

    <CodeLine>
      <TagClose tagname="title" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagClose tagname="head" :indent="2" />
    </CodeLine>

    <CodeLine>
      <TagOpen tagname="body" :indent="2" />
    </CodeLine>

    <CodeLine>
      <TagOpen tagname="heaeder" attr="class" attrValue="&quot;자기소개&quot;" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagContents :indent="4">
        안녕하세요! <br />
        "마부작침 십벌지목" 조원석입니다!
      </TagContents>
    </CodeLine>
    <CodeLine>
      <TagContents :indent="4">
        <br />
        데이터가공,처리 위주에 개발을 즐겨하나 프론트 공부를 위하여 해당프로젝트 진행하였습니다
        <br />
      </TagContents>
    </CodeLine>

    <CodeLine>
      <TagContents :indent="4">
        군복무를 마치고 더욱 체계적이고 전문적인 개발자가 되고자
        </TagContents>
    </CodeLine>
    <CodeLine>
        <TagContents :indent="4">
        한화시스템 Beyond SW Camp 18기로 선발되어 다양한 기술스택과 협업도구를 활용하여
        </TagContents>
    </CodeLine>    
    <CodeLine>    
        <TagContents :indent="4">
        팀프로젝트를 수행하여 최종 1위로 수료하였습니다.
        </TagContents>
    </CodeLine>

    <CodeLine>
      <TagClose tagname="heaeder" :indent="3" />
    </CodeLine>

    <CodeLine />

    <CodeLine>
      <TagOpen tagname="main" attr="class" attrValue="&quot;경험, 그리고 공부중인 것들&quot;" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagContents :indent="5">
        <h4>💻 사용 기술과 경험</h4>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>Vue ,React, React-Native</em>
          </dt>
          <dd>
            - 각종 Hooks 능숙하게 다룰 수 있으며, 모든 컴포넌트를 함수형으로 개발합니다.
          </dd>
          <dd>
            - Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을 고려합니다.
          </dd>
          <dd>
            - 컴포넌트의 불필요한 리렌더링 방지를 위하여 useRef, useMemo 등을 적절하게 사용합니다.
          </dd>
          <dd>
            -React-Native를 사용하여 앱개발을 진행한 적이 있으며 다양한 라이브러리를 사용 할 수 있습니다.
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>Javascript, Node.js</em>
          </dt>
          <dd>
            - API로 받아온 데이터를 프론트 개발 상황에 맞게 적절히 가공하거나 다룰 수 있습니다.
          </dd>
          <dd>
            - Node.js를 주력언어로 가장 오래 사용하였습니다.
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>Spring,Express.js, NestJS</em>
          </dt>
          <dd>
            - Spring-boot와 NestJS를 활용한 backend 개발 경험이 있습니다.
          </dd>
          <dd>
            - RESTful API 설계 및 구현 경험이 있으며, JWT를 활용한 인증 및 권한 부여를 다뤄본 경험이 있고
              데이터베이스와의 연동 및 ORM 사용 경험이 있습니다.
          </dd>
          <dd>
            - 미들웨어 사용 및 라우팅 설정에 대한 이해가 있습니다.
            - 서버 성능 최적화 및 보안 강화에 대한 기본적인 이해를 가지고 있습니다.
          </dd>
          <dd>
            - Express.js를 활용한 간단한 서버 구축 경험이 있습니다. 
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>SQL, FileMaker,restAPI</em>
          </dt>
          <dd>
            - noSQL보다는 SQL을 선호하는 편이며 CRUD는 물론 관계,설계,데이터처리를 능숙하게 진행합니다.
          </dd>
          <dd>
            - claris사의 FileMaker Pro라는 데이터베이스기반의 프로그램을 능숙하게 사용가능합니다.
          </dd>
          <dd>
            - API에 관한 지식이 깊고 다양한 데이터활용 능력이 좋습니다.
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>CI/CD</em>
          </dt>
          <dd>
            - Jenkins, GitHub Actions 등을 활용한 CI/CD 파이프라인 구축 경험이 있습니다.
            - Git을 활용한 버전 관리 및 협업 경험이 풍부합니다.
          </dd>
          <dd>
            - 자동화된 빌드, 테스트, 배포 프로세스를 설계하고 구현할 수 있습니다.
            - Docker와 같은 컨테이너화 기술을 활용한 배포 경험이 있습니다.
            - 모니터링 및 로깅 도구를 사용하여 배포된 애플리케이션의 상태를 관리한 경험이 있습니다.
          </dd>
          <dd>
            - AWS, Azure 등의 클라우드 플랫폼을 활용한 배포 경험이 있습니다.
            - 블루그린 배포, 카나리 배포 등 다양한 배포 전략에 대한 이해가 있습니다.
            - 장애 복구 및 롤백 전략을 수립하고 실행한 경험이 있습니다.
            - 팀원들과 효과적으로 협업하여 CI/CD 프로세스를 개선한 경험이 있습니다.
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="5">
        <h4>✍️ 공부중인 것</h4>
      </TagContents>
    </CodeLine>
    <CodeLine />

    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>GSAP</em>
          </dt>
          <dd>
            - GSAP의 animation, scroll trigger를 활용한 인터랙티브 웹 개발에 대해 공부중입니다.
          </dd>
          <br/>
          <dt>
            <em>Spring</em>
          </dt>
          <dd>
            - Spring-boot와,JAVA를 활용한 backend 개발에 대해 공부중입니다.
          </dd>
          <br/>
          <dt>
            <em>LLM</em>
          </dt>
          <dd>
            - ChatGPT API를 활용한 다양한 프로젝트를 구상하고 있으며, LLM의 활용방안에 대해 공부중입니다.
          </dd>
          <br/>
          <dt>
            <em>Cloud engineering</em>
          </dt>
          <dd>
            - AWS, Azure 등의 클라우드 플랫폼을 활용한 인프라 구축 및 관리에 대해 공부중입니다.
          </dd>
          <br/>
          <dt>
            <em>Virtual Factory</em>
          </dt>
          <dd>
            - virtual factory에 관련하여 흥미가 생기게 되어 관련 기술과 적용사례에 대해 공부중입니다.
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />

    <CodeLine>
      <TagClose tagname="main" :indent="3" />
    </CodeLine>
    <CodeLine />

    <CodeLine>
      <TagOpen tagname="footer" attr=" class" attrValue="&quot; 경력 및 교육&quot;" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagContents :indent="5">
        <h4>📇 경력</h4>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>(주)MITMAS(2022.06 ~ 2023.06)</em>
          </dt>
          <dd>
            - 삼성전자,르노코리아 파트너사로 해당부서 IT관련 Q&A 및 Devops (정직원/사원)
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>(주)티라이프(2020.10 ~ 2021.06)</em>
          </dt>
          <dd>
            - 온라인쇼핑몰관리플랫폼개발,쇼핑몰백오피스 및 물류데이터베이스 구축, 마케팅부서를 위한 업무자동화 프로그램개발 , 유지보수 업무 담당 (정직원/사원)
          </dd>
        </dl>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            <em>(주)미디어코어시스템즈(2019.3 ~ 2020.10)</em>
          </dt>
          <dd>- 프론트엔드교육 수강 및 간단한 업무 ,자기개발 (실습생/인턴)</dd>
        </dl>
      </TagContents>
    </CodeLine>

    <CodeLine />
    <CodeLine />
    <CodeLine>
      <TagContents :indent="5">
        <h4>👩‍🎓 교육</h4>
      </TagContents>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <TagContents :indent="6">
        <dl>
          <dt>
            - 동서울대학교 AI소프트웨어학과 1학년(2021.03 입학 ~ 2021.06 중퇴)
          </dt>
          <br/>
          <dt>
            - 한화시스템 Beyond SW Camp 18기(2025.06 ~ 2025.12 수료)
          </dt>
        </dl>
        <br/>
      </TagContents>
    </CodeLine>

    <CodeLine>
      <TagClose tagname="footer" :indent="3" />
    </CodeLine>

    <CodeLine>
      <TagClose tagname="body" :indent="2" />
    </CodeLine>

    <CodeLine>
      <TagClose tagname="html" />
    </CodeLine>
  </CodeBlock>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue';
import CodeLine from '../components/CodeLine.vue';
import TagContents from '../components/TagContents.vue';
import TagOpen from '../components/TagOpen.vue';
import TagClose from '../components/TagClose.vue';


</script>
