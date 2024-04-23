export const useKakaoSdk = () => {
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Rolling",
          description: "롤링 페이퍼를 통해 마음을 전달해보세요 :D",
          imageUrl:
            "https://i.pinimg.com/564x/fe/42/2b/fe422b263d22cf32af4aa0279c78c582.jpg",
          link: {
            mobileWebUrl: "https://rolling-5-8.netlify.app/",
            webUrl: "https://rolling-5-8.netlify.app/",
          },
        },
        buttons: [
          {
            title: "자세히 보러 가기",
            link: {
              mobileWebUrl: "https://rolling-5-8.netlify.app/",
              webUrl: "https://rolling-5-8.netlify.app/",
            },
          },
        ],
      });
    }
  };

  return { shareKakao };
};
