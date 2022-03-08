/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        const firstLast: number[] = [numbers[0], numbers[0]];
        return firstLast;
    } else {
        const firstLast: number[] = [numbers[0], numbers[numbers.length - 1]];
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //parses all strings to int
    const strToInt = numbers.map((str: string): number => parseInt(str));

    //changes anything that is NaN to 0
    const noString = strToInt.map((num: number): number =>
        isNaN(num) ? 0 : num
    );

    return noString;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //removes the  char '$'
    const noDollars = amounts.map((str: string): string =>
        str[0] === "$" ? str.replace("$", "") : str
    );

    //parses all strings to int
    const strToInt = noDollars.map((str: string): number => parseInt(str));

    //changes anything that is NaN to 0
    const dollarsRemoved = strToInt.map((num: number): number =>
        isNaN(num) ? 0 : num
    );

    return dollarsRemoved;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //removes the questions
    const noQuestions = messages.filter(
        (msg: string): boolean => msg.charAt(msg.length - 1) !== "?"
    );
    //adds the shouts when they are needed
    const addShout = noQuestions.map((msg: string): string =>
        msg.charAt(msg.length - 1) === "!" ? msg.toUpperCase() : msg
    );

    return addShout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            color === ""
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((sum, current) => sum + current, 0);
    //check for empty array
    if (addends.length === 0) {
        return sum + "=0";
    } else {
        return sum + "=" + addends.join("+");
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const neg = values.findIndex((num: number): boolean => num < 0);
    if (neg === -1) {
        //no negative number in array
        const sum = values.reduce((sum, current) => sum + current, 0);
        return [...values, sum];
    } else {
        const onlyPos = values.filter(
            (num: number): boolean => values.indexOf(num) < neg
        );
        const afterNeg = values.filter(
            (num: number): boolean => values.indexOf(num) > neg
        );
        const sum = onlyPos.reduce((sum, current) => sum + current, 0);
        return [...onlyPos, values[neg], sum, ...afterNeg];
    }
}
