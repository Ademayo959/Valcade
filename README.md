# Cascadejs

A lightweight, human-readable JavaScript validation library. Stop wrestling with regex and start shipping.


## Installation

```bash
npm install valcade
```

---

## Usage

```js
const cascade = require('valcade');

const email = cascade.isEmail("user@gmail.com");
console.log(email);
// { result: true, message: 'String is an Email' }

const password = cascade.isStrongPassword("Secure@1234");
console.log(password);
// { result: true, message: 'Password is Strong' }
```

Every function returns an object with two properties — `result` (a boolean) and `message` (a human-readable string telling you exactly what passed or failed). No cryptic error codes, no digging through docs to understand what went wrong.

---

## Functions

Valcade ships with 17 functions across three categories.

**Text & Strings**

`isEmail(value)` checks that a string is a properly formatted email address. `isURL(value)` checks that a string is a valid URL starting with http or https. `isAlphabetic(value)` makes sure a string contains only letters with no numbers or special characters. `isAlphanumeric(value)` checks for letters and numbers only. `isUppercase(value)` and `isLowercase(value)` check the case of the entire string. `isEmpty(value)` and `isNotEmpty(value)` check whether a string has content or not — whitespace-only strings count as empty.

```js
cascade.isEmail("user@example.com");
// { result: true, message: 'String is an Email' }

cascade.isAlphanumeric("Hello123");
// { result: true, message: 'It is alphanumeric' }

cascade.isEmpty("   ");
// { result: true, message: 'String is empty' }
```

**Numbers & Math**

`isNumeric(value)` checks that a value contains only digits. `isDecimal(value)` checks for a number with exactly one decimal point like 3.14. `isPositive(value)` and `isNegative(value)` check the sign of a number.

```js
cascade.isDecimal("3.14");
// { result: true, message: 'It is a decimal number' }

cascade.isNegative(-5);
// { result: true, message: 'It is a Negative number' }
```

**Security & Forms**

`isPhoneNumber(value)` validates international phone number formats. `isCreditCard(value)` validates card numbers using the Luhn algorithm — the same standard used by banks worldwide. For passwords, Valcade gives you three tiers: `isWeakPassword(value)` requires at least 6 characters, `isMediumPassword(value)` requires at least 8 characters with both letters and numbers, and `isStrongPassword(value)` requires at least 10 characters with uppercase, lowercase, numbers and special characters.

```js
cascade.isCreditCard("4111111111111111");
// { result: true, message: 'Value is a valid credit card number' }

cascade.isStrongPassword("Secure@1234");
// { result: true, message: 'Password is Strong' }

cascade.isMediumPassword("abcd1234");
// { result: true, message: 'Password is Medium' }
```

---

## License

MIT © Adeleye Oluwamayowa
