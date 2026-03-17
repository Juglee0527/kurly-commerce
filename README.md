# Kurly Commerce Platform

마켓컬리의 상품 경험, 배송 중심 커머스 흐름, 그리고 운영 규모를 참고하여 만든 포트폴리오용 이커머스 플랫폼입니다.

이 저장소는 모노레포(monorepo) 구조로 구성되어 있으며, 현재는 백엔드, 프론트엔드, 인프라, 문서 전반에 걸친 **기본적인 엔지니어링 기반을 구축하는 단계**입니다.
현재 단계에서는 프로젝트 구조와 환경 설정만 포함되어 있으며, 실제 비즈니스 기능은 **기반 아키텍처가 안정화된 이후에 구현할 예정**입니다.

---

## 프로젝트 개요

이 프로젝트의 목표는 API 설계, 데이터 모델링, 이벤트 기반 통합, 프론트엔드 아키텍처, 로컬 개발 환경까지 포함한 **실무형 풀스택 개발 역량을 보여주는 현대적인 커머스 플랫폼을 만드는 것**입니다.

이 프로젝트는 다음을 강조하기 위해 설계되었습니다:

* Spring Boot 기반의 확장 가능한 백엔드 설계
* Next.js App Router 기반의 최신 프론트엔드 개발
* Docker Compose를 활용한 로컬 개발 인프라
* 애플리케이션 / 인프라 / 문서의 명확한 분리 구조

---

## 기술 스택

### Backend

* Java 21
* Gradle
* Spring Boot 3.x
* Spring Web
* Spring Data JPA
* QueryDSL
* Spring Security
* Spring Validation
* MySQL
* Redis
* Kafka
* Lombok

---

### Frontend

* Next.js
* React
* TypeScript
* App Router
* Tailwind CSS
* ESLint

---

### Infrastructure

* Docker Compose
* MySQL
* Redis
* Kafka
* Zookeeper
* Nginx
* Kubernetes 배포를 위한 매니페스트 (placeholder 수준)

---

## 개발 목표

* 명확한 도메인 경계를 가진 유지보수 가능한 커머스 백엔드 구축
* 확장 가능한 기능 개발을 고려한 프론트엔드 구조 설계
* 데이터 저장, 캐싱, 메시징을 위한 로컬 인프라 구성
* 향후 주문, 상품, 사용자, 프로모션 도메인 확장을 위한 코드 구조 준비
* 실무 수준의 엔지니어링 방식을 포트폴리오 형태로 보여주기

---

## 실행 방법

현재는 초기 구조 단계이므로, 아래 명령어는 기본적인 로컬 실행용입니다.

---

### 1. 로컬 인프라 실행

```bash
cd infra
docker compose up -d
```

---

### 2. 백엔드 실행

```bash
cd backend
./gradlew bootRun
```

Windows PowerShell:

```powershell
cd backend
.\gradlew.bat bootRun
```

---

### 3. 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

---

## 향후 계획 (로드맵)

* 핵심 도메인 모델링
* 인증 및 인가 기능 구현
* 상품 / 장바구니 / 주문 흐름 구현
* Kafka 기반 이벤트 처리 구조 도입
* 배포 파이프라인 및 환경 구성
