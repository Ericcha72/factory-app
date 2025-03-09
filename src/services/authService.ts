// src/services/authService.ts 파일 생성
interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export const authService = {
    login: async (credentials: LoginCredentials) => {
      // 임시 로그인 로직 (나중에 실제 API로 대체)
      if (credentials.username === 'admin' && credentials.password === '1234') {
        return {
          success: true,
          user: {
            id: 1,
            username: credentials.username,
            name: '관리자',
          }
        };
      }
      throw new Error('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };