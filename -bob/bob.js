/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isYelling = () => {
    return message === message.toUpperCase() && message.match(/[a-z]/i)
  }

  if (message.trim().slice(-1) === '?'){
    if (isYelling()) {
      return 'Calm down, I know what I\'m doing!';
    } else {
      return 'Sure.'
    }
  }

  if (isYelling()){
    return 'Whoa, chill out!';
    //asking him anything
  }

  if (message.trim().length == 0) {
    return 'Fine. Be that way!';
  }

  return 'Whatever.';
  
};

