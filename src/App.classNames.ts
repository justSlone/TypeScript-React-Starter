import { IStyle, mergeStyleSets, keyframes } from '@uifabric/merge-styles';
import { memoizeFunction } from '@uifabric/utilities';

export interface IAppClassNames {
  app: string;
  appLogo: string;
  appHeader: string;
  appIntro: string;
}

export const getClassNames = memoizeFunction((): IAppClassNames => {
  const logoSpin = keyframes({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  });
  return mergeStyleSets({
    app: { textAlign: 'center' },
    appLogo: {
      animationName: logoSpin,
      animationDuration: '20s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      height: '80px',
    },
    appHeader: {
      backgroundColor: '#222',
      height: '150px',
      padding: '20px',
      color: '#dfdfd0',
    },
    appIntro: {
      fontSize: 'large',
    },
  })
});

/*
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

*/