const myArray = [2, 3, 4];

export const myPush = (array, element) => {
    array[array.length] = element;
    return array.length;
};
