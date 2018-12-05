import { mergeStyles } from '@uifabric/merge-styles';

mergeStyles({
  selectors: {
    ':global(body)': {
      backgroundColor: '#dcdcdc',
      color: '#262626',
      margin: 0,
      padding: 0,
      fontFamily: "sans-serif"
    }
  }
});

/*
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
*/