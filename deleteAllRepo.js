const https = require('https')
const accessToken = ''

const req = https.request({
    hostname: 'gitee.com',
    path: `/api/v5/user/repos?sort=full_name&page=1&per_page=1&access_token=${accessToken}`,
    method: 'GET',
}, res => {
    console.log(`列出授权用户的所有仓库 statusCode: ${res.statusCode}`)
    let data = ''
    res.on('data', chunk => {
        data += chunk
    })
    res.on('end', () => {
        const list = JSON.parse(data)
        console.log('仓库数: ',list.length)
        list.forEach((item) => {
            const reqDel = https.request({
                hostname: 'gitee.com',
                path: `/api/v5/repos/${item.project_creator}/${item.path}?access_token=${accessToken}`,
                method: 'DELETE',
            }, res => {
                console.log(`删除 statusCode: ${res.statusCode}`)
                let data = ''
                res.on('data', chunk => {
                    data += chunk
                })
                res.on('end', () => {
                    try {
                        // console.log(JSON.parse(data))
                    } catch (e) {
                        console.log(e)
                    }
                })
            })
            reqDel.end()
        })


    })
})
req.end()
