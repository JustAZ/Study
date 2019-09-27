let loadScript = function () {
    return function _loadScript(url, callback) {
        return new Promise(function (resolve) {

            let script = document.createElement("script")
            script.type = "text/javascript"
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.raedyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback()
                        resolve(_loadScript)
                    }
                }
            } else {
                script.onload = function () {
                    callback()
                    resolve(_loadScript)
                }
            }
            script.src = url
            document.head.appendChild(script)
        })
    }
}()

loadScript(url, () => {
    console.log('1')
}).then(res => {
    return res(url, () => {
        console.log('2')
    })
}).then(res => {
    res => res(url, () => { console.log('3') })
})