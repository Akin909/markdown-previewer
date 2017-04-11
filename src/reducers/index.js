// TODO Not sure if I need this yet
// import redux from 'redux';

export default function (state = '', action) {
  switch (action.type) {
    case 'TYPING':
      return [state, ...action.payload];
    
      default:
        return state;
  }

}


