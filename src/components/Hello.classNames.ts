import { IStyle, mergeStyleSets, keyframes } from '@uifabric/merge-styles';
import { memoizeFunction } from '@uifabric/utilities';

export interface IHelloClassNames {
  hello: string;
}

export const getClassNames = memoizeFunction((): IHelloClassNames => {
  return mergeStyleSets({
    hello: {
      textAlign: 'center',
      margin: '20px',
      fontSize: '48px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      selectors: {
        '& button': {
          marginLeft: '25px',
          marginRight: '25px',
          fontSize: '40px',
          minWidth: '50px'
        }
      }
    }
  })
});

/*
.hello {
  text-align: center;
  margin: 20px;
  font-size: 48px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.hello button {
    margin-left: 25px;
    margin-right: 25px;
    font-size: 40px;
    min-width: 50px;
}
*/