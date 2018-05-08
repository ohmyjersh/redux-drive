import makeItLikeAFunction from './makeItLikeAFunction';

test('should turn action string to function string', () => {
  expect(makeItLikeAFunction('HELLO_DEAR_FRIEND')).toEqual('helloDearFriend');
});
test('should turn action string to function string', () => {
  expect(makeItLikeAFunction('HelloDearFriend')).toEqual('helloDearFriend');
});
