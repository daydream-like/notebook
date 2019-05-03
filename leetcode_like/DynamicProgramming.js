/**
 * 最长公共子序列
 * @param {*} str1 子串1
 * @param {*} str2 子串2
 */
function LCS(str1, str2) {
    var len1 = str1.length,
        len2 = str2.length;
    var dp = [];
    for (var i = 0; i <= len1; i++) {
        dp[i] = [];
        for (var j = 0; j <= len2; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0;
                continue;
            }
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    var result = printLCS(dp, str1, str2, len1, len2);
    return result;
}
// 打印公共子序列
function printLCS(dp, str1, str2, i, j) {
    if (i == 0 || j == 0) {
        return "";
    }
    if (str1[i - 1] == str2[j - 1]) {
        return printLCS(dp, str1, str2, i - 1, j - 1) + str1[i - 1];
    } else if (dp[i][j - 1] > dp[i - 1][j]) {
        return printLCS(dp, str1, str2, i, j - 1);
    } else {
        return printLCS(dp, str1, str2, i - 1, j);
    }
}

module.exports ={
    LCS
}