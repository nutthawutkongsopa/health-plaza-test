function getCommonPrefix(inputData) {
    const data = [...inputData]
    if (!data[0]) {
        return ""
    }

    let result = "";
    let end = 2;
    let pre = String(data[0]).substring(0, end)
    while (!data.find(x => !RegExp(`^${pre}`).test(x))) {
        result = pre;
        pre = String(data[0]).substring(0, ++end)
    }

    return result;
};

module.exports = getCommonPrefix
