type NonEmptyString = Exclude<string, ''>;

// not work as expected
const a: NonEmptyString = ''
