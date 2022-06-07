# giteeDeleteAccount

如何注销 Gitee 帐号官方文档 https://gitee.com/help/articles/4286#article-header1

由于 Gitee 删除要求账户下没有仓库,所以先跑脚本把仓库全删了.

1. 生成一个私人令牌 : https://gitee.com/personal_access_tokens
2. 把令牌复制到 `deleteAllRepo.js` 第2行的 `accessToken`
3. node deleteAllRepo.js

Gitee Open API 限制获取仓库每页的数量，最大为 100,加上批量删除容易出错, 所以多跑两遍,到网页个人仓库看下有没有清干净. 然后就可以发邮件删除账号了

## 相关 api

列出授权用户的所有仓库

https://gitee.com/api/v5/swagger#/getV5UserRepos


删除一个仓库

https://gitee.com/api/v5/swagger#/deleteV5ReposOwnerRepo

