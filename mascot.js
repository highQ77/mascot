// Willaim77 Software. 2025-07-20
const MASCOT = {
    compressTool() {
        // LZString
        return function () { var r = String.fromCharCode, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", e = {}; function t(r, o) { if (!e[r]) { e[r] = {}; for (var n = 0; n < r.length; n++)e[r][r.charAt(n)] = n } return e[r][o] } var i = { compressToBase64: function (r) { if (null == r) return ""; var n = i._compress(r, 6, function (r) { return o.charAt(r) }); switch (n.length % 4) { default: case 0: return n; case 1: return n + "==="; case 2: return n + "=="; case 3: return n + "=" } }, decompressFromBase64: function (r) { return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (n) { return t(o, r.charAt(n)) }) }, compressToUTF16: function (o) { return null == o ? "" : i._compress(o, 15, function (o) { return r(o + 32) }) + " " }, decompressFromUTF16: function (r) { return null == r ? "" : "" == r ? null : i._decompress(r.length, 16384, function (o) { return r.charCodeAt(o) - 32 }) }, compressToUint8Array: function (r) { for (var o = i.compress(r), n = new Uint8Array(2 * o.length), e = 0, t = o.length; e < t; e++) { var s = o.charCodeAt(e); n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256 } return n }, decompressFromUint8Array: function (o) { if (null == o) return i.decompress(o); for (var n = new Array(o.length / 2), e = 0, t = n.length; e < t; e++)n[e] = 256 * o[2 * e] + o[2 * e + 1]; var s = []; return n.forEach(function (o) { s.push(r(o)) }), i.decompress(s.join("")) }, compressToEncodedURIComponent: function (r) { return null == r ? "" : i._compress(r, 6, function (r) { return n.charAt(r) }) }, decompressFromEncodedURIComponent: function (r) { return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (o) { return t(n, r.charAt(o)) })) }, compress: function (o) { return i._compress(o, 16, function (o) { return r(o) }) }, _compress: function (r, o, n) { if (null == r) return ""; var e, t, i, s = {}, u = {}, a = "", p = "", c = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0; for (i = 0; i < r.length; i += 1)if (a = r.charAt(i), Object.prototype.hasOwnProperty.call(s, a) || (s[a] = f++, u[a] = !0), p = c + a, Object.prototype.hasOwnProperty.call(s, p)) c = p; else { if (Object.prototype.hasOwnProperty.call(u, c)) { if (c.charCodeAt(0) < 256) { for (e = 0; e < h; e++)m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = c.charCodeAt(0), e = 0; e < 8; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; e < h; e++)m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = c.charCodeAt(0), e = 0; e < 16; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } 0 == --l && (l = Math.pow(2, h), h++), delete u[c] } else for (t = s[c], e = 0; e < h; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; 0 == --l && (l = Math.pow(2, h), h++), s[p] = f++, c = String(a) } if ("" !== c) { if (Object.prototype.hasOwnProperty.call(u, c)) { if (c.charCodeAt(0) < 256) { for (e = 0; e < h; e++)m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = c.charCodeAt(0), e = 0; e < 8; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; e < h; e++)m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = c.charCodeAt(0), e = 0; e < 16; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } 0 == --l && (l = Math.pow(2, h), h++), delete u[c] } else for (t = s[c], e = 0; e < h; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; 0 == --l && (l = Math.pow(2, h), h++) } for (t = 2, e = 0; e < h; e++)m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; for (; ;) { if (m <<= 1, v == o - 1) { d.push(n(m)); break } v++ } return d.join("") }, decompress: function (r) { return null == r ? "" : "" == r ? null : i._decompress(r.length, 32768, function (o) { return r.charCodeAt(o) }) }, _decompress: function (o, n, e) { var t, i, s, u, a, p, c, l = [], f = 4, h = 4, d = 3, m = "", v = [], g = { val: e(0), position: n, index: 1 }; for (t = 0; t < 3; t += 1)l[t] = t; for (s = 0, a = Math.pow(2, 2), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; switch (s) { case 0: for (s = 0, a = Math.pow(2, 8), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; c = r(s); break; case 1: for (s = 0, a = Math.pow(2, 16), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; c = r(s); break; case 2: return "" }for (l[3] = c, i = c, v.push(c); ;) { if (g.index > o) return ""; for (s = 0, a = Math.pow(2, d), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; switch (c = s) { case 0: for (s = 0, a = Math.pow(2, 8), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; l[h++] = r(s), c = h - 1, f--; break; case 1: for (s = 0, a = Math.pow(2, 16), p = 1; p != a;)u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1; l[h++] = r(s), c = h - 1, f--; break; case 2: return v.join("") }if (0 == f && (f = Math.pow(2, d), d++), l[c]) m = l[c]; else { if (c !== h) return null; m = i + i.charAt(0) } v.push(m), l[h++] = i + m.charAt(0), i = m, 0 == --f && (f = Math.pow(2, d), d++) } } }; return i }(); "function" == typeof define && define.amd ? define(function () { return LZString }) : "undefined" != typeof module && null != module ? module.exports = LZString : "undefined" != typeof angular && null != angular && angular.module("LZString", []).factory("LZString", function () { return LZString });
    },
    save(embedScriptPath, infoParams) {
        var info = {
            appName: infoParams?.appName || 'app name not define',
            author: infoParams?.author || 'your name',
            version: infoParams?.version || 'v1.0.0',
            filename: infoParams?.filename || 'test',
            storeSize: infoParams?.storeSize || 128,
            logoPath: infoParams?.logoPath || './logo.png',
            logoWidth: infoParams?.logoWidth || 100,
            logoHeight: infoParams?.logoHeight || 100,
        }

        fetch(embedScriptPath).then(r => r.text()).then(async s => {

            let { appName, author, version, filename, storeSize, logoPath, logoWidth, logoHeight } = info

            // s = `console.log("${appName} ${version} - ${author}");` + s;
            // s = MASCOT.compressTool().compressToBase64(s)
            // let data = btoa(encodeURIComponent(encodeStr(s))).split('')

            s = `console.log("${appName} ${version} - ${author}");` + s;
            s = MASCOT.compressTool().compressToBase64(s)
            let data = s.split('')

            // meta data
            let len = data.length
            let lenStr = len.toString().split('').reverse()
            data.unshift('|')
            for (let i = 0; i < len; i++)
                data.unshift(lenStr[i])
            data = data.filter(i => i)

            let dMap = data.map(i => i.charCodeAt(0))
            const dataMinValue = dMap.reduce((min, current) => current < min ? current : min) // min
            const dataMaxValue = dMap.reduce((min, current) => current > min ? current : min) // max
            const logo = await getLogoImage(logoPath)

            const ctx = getNewCanvas(storeSize, storeSize).getContext('2d')
            ctx.drawImage(logo, (storeSize - logoWidth) / 2, (storeSize - logoHeight) / 2, logoWidth, logoHeight)

            const ctx2 = getNewCanvas(storeSize, storeSize).getContext('2d')
            perPixelHandler(ctx, (x, y, r, g, b, a) => {
                if (a == 255) {
                    ctx2.fillStyle = `rgba(${r},${g},${b},${251 / 255})` // logo alpha 251
                    ctx2.fillRect(x, y, 1, 1)
                }
            })

            const ctx3 = getNewCanvas(storeSize, storeSize).getContext('2d')
            ctx3.canvas.style.border = '1px solid gray'
            let index = 0
            let stopIndex = index
            perPixelHandler(ctx2, (x, y, r, g, b, a) => {
                // if not logo area
                if (a != 251 && data.length) {
                    r = data.shift()?.charCodeAt(0)
                    g = data.shift()?.charCodeAt(0)
                    b = data.shift()?.charCodeAt(0)
                    a = 255
                    if (isNaN(r + g + b)) {
                        let undefinedCount = 0
                        if (g == undefined) { undefinedCount++; g = 255 }
                        if (b == undefined) { undefinedCount++; b = 255 }
                        stopIndex = index + undefinedCount
                    }
                }
                // insert fake data to fill image
                if (!data.length && index >= stopIndex) {
                    r = dataMinValue + getRandomInt(dataMaxValue - dataMinValue)
                    g = dataMinValue + getRandomInt(dataMaxValue - dataMinValue)
                    b = dataMinValue + getRandomInt(dataMaxValue - dataMinValue)
                    a = 251
                }
                ctx3.fillStyle = `rgba(${r},${g},${b},${a / 255})`
                ctx3.fillRect(x, y, 1, 1)
                index++
            })
            ctx3.drawImage(ctx2.canvas, 0, 0)
            // document.body.append(ctx3.canvas)


            // download bitmapdata 
            let imgURL = ctx3.canvas.toDataURL('image/bmp')
            const link = document.createElement('a');
            link.setAttribute('href', imgURL);
            link.setAttribute('download', 'mascot-' + filename + '.bmp');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })

        // generate canvas object
        function getNewCanvas(width, height) {
            const cav = document.createElement('canvas')
            cav.width = width
            cav.height = height
            return cav
        }

        // get logo image object
        function getLogoImage(src) {
            return new Promise(resolve => {
                let img = new Image
                img.onload = () => {
                    resolve(img)
                }
                img.src = src
            })
        }

        // per pixel handler
        function perPixelHandler(ctx, handler) {
            const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data
            const colorSize = 4
            for (let j = 0; j < ctx.canvas.height; j += 1) {
                for (let i = 0; i < ctx.canvas.width * colorSize; i += colorSize) {
                    const pos = i + j * ctx.canvas.width * colorSize
                    const r = data[pos]
                    const g = data[pos + 1]
                    const b = data[pos + 2]
                    const a = data[pos + 3]
                    const x = i / colorSize
                    const y = j
                    handler(x, y, r, g, b, a)
                }
            }
        }

        // get random interger
        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }

        // solved - boa characters outside of the latin1 range
        function encodeStr(str) {
            const encoder = new TextEncoder()
            const charCodes = encoder.encode(str)
            return String.fromCharCode(...charCodes)
        }
    },
    recover(imgUrl) {
        return new Promise(resolve => {
            const img = new Image
            img.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                ctx.drawImage(img, 0, 0)

                const data = []
                perPixelHandler(ctx, (x, y, r, g, b, a) => {
                    if (a == 255) {
                        if (r != 255) data.push(r)
                        if (g != 255) data.push(g)
                        if (b != 255) data.push(b)
                    }
                })

                const originData = data.map(i => String.fromCharCode(i)).join('')
                // 確保資料正確截取
                let splitIndex = originData.indexOf('|')
                let len = parseInt(originData.slice(0, splitIndex))
                let finalData = originData.slice(splitIndex + 1, splitIndex + 1 + len)
                // finalData = decodeData(decodeURIComponent(atob(finalData)))
                finalData = MASCOT.compressTool().decompressFromBase64(finalData)
                resolve(finalData)
            }
            img.src = imgUrl

            // per pixel handler
            function perPixelHandler(ctx, handler) {
                const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data
                const colorSize = 4
                for (let j = 0; j < ctx.canvas.height; j += 1) {
                    for (let i = 0; i < ctx.canvas.width * colorSize; i += colorSize) {
                        const pos = i + j * ctx.canvas.width * colorSize
                        const r = data[pos]
                        const g = data[pos + 1]
                        const b = data[pos + 2]
                        const a = data[pos + 3]
                        const x = i / colorSize
                        const y = j
                        handler(x, y, r, g, b, a)
                    }
                }
            }

            // correct decode chinese words and emoji
            function decodeData(encoding) {
                const u8Arr = new Uint8Array(encoding.split('').map(i => i.charCodeAt(0)))
                const decoder = new TextDecoder()
                return decoder.decode(u8Arr)
            }
        })
    },
    run(data) {
        let s = document.createElement('script')
        s.textContent = data
        document.body.append(s)
        s.remove()
    }
}