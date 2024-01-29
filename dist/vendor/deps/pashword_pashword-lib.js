var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/scrypt-js/scrypt.js
var require_scrypt = __commonJS({
  "node_modules/scrypt-js/scrypt.js"(exports, module) {
    "use strict";
    (function(root) {
      const MAX_VALUE = 2147483647;
      function SHA256(m) {
        const K = new Uint32Array([
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ]);
        let h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762;
        let h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225;
        const w = new Uint32Array(64);
        function blocks(p2) {
          let off = 0, len = p2.length;
          while (len >= 64) {
            let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7, u, i2, j, t1, t2;
            for (i2 = 0; i2 < 16; i2++) {
              j = off + i2 * 4;
              w[i2] = (p2[j] & 255) << 24 | (p2[j + 1] & 255) << 16 | (p2[j + 2] & 255) << 8 | p2[j + 3] & 255;
            }
            for (i2 = 16; i2 < 64; i2++) {
              u = w[i2 - 2];
              t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
              u = w[i2 - 15];
              t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
              w[i2] = (t1 + w[i2 - 7] | 0) + (t2 + w[i2 - 16] | 0) | 0;
            }
            for (i2 = 0; i2 < 64; i2++) {
              t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i2] + w[i2] | 0) | 0) | 0;
              t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            h0 = h0 + a | 0;
            h1 = h1 + b | 0;
            h2 = h2 + c | 0;
            h3 = h3 + d | 0;
            h4 = h4 + e | 0;
            h5 = h5 + f | 0;
            h6 = h6 + g | 0;
            h7 = h7 + h | 0;
            off += 64;
            len -= 64;
          }
        }
        blocks(m);
        let i, bytesLeft = m.length % 64, bitLenHi = m.length / 536870912 | 0, bitLenLo = m.length << 3, numZeros = bytesLeft < 56 ? 56 : 120, p = m.slice(m.length - bytesLeft, m.length);
        p.push(128);
        for (i = bytesLeft + 1; i < numZeros; i++) {
          p.push(0);
        }
        p.push(bitLenHi >>> 24 & 255);
        p.push(bitLenHi >>> 16 & 255);
        p.push(bitLenHi >>> 8 & 255);
        p.push(bitLenHi >>> 0 & 255);
        p.push(bitLenLo >>> 24 & 255);
        p.push(bitLenLo >>> 16 & 255);
        p.push(bitLenLo >>> 8 & 255);
        p.push(bitLenLo >>> 0 & 255);
        blocks(p);
        return [
          h0 >>> 24 & 255,
          h0 >>> 16 & 255,
          h0 >>> 8 & 255,
          h0 >>> 0 & 255,
          h1 >>> 24 & 255,
          h1 >>> 16 & 255,
          h1 >>> 8 & 255,
          h1 >>> 0 & 255,
          h2 >>> 24 & 255,
          h2 >>> 16 & 255,
          h2 >>> 8 & 255,
          h2 >>> 0 & 255,
          h3 >>> 24 & 255,
          h3 >>> 16 & 255,
          h3 >>> 8 & 255,
          h3 >>> 0 & 255,
          h4 >>> 24 & 255,
          h4 >>> 16 & 255,
          h4 >>> 8 & 255,
          h4 >>> 0 & 255,
          h5 >>> 24 & 255,
          h5 >>> 16 & 255,
          h5 >>> 8 & 255,
          h5 >>> 0 & 255,
          h6 >>> 24 & 255,
          h6 >>> 16 & 255,
          h6 >>> 8 & 255,
          h6 >>> 0 & 255,
          h7 >>> 24 & 255,
          h7 >>> 16 & 255,
          h7 >>> 8 & 255,
          h7 >>> 0 & 255
        ];
      }
      function PBKDF2_HMAC_SHA256_OneIter(password, salt, dkLen) {
        password = password.length <= 64 ? password : SHA256(password);
        const innerLen = 64 + salt.length + 4;
        const inner = new Array(innerLen);
        const outerKey = new Array(64);
        let i;
        let dk = [];
        for (i = 0; i < 64; i++) {
          inner[i] = 54;
        }
        for (i = 0; i < password.length; i++) {
          inner[i] ^= password[i];
        }
        for (i = 0; i < salt.length; i++) {
          inner[64 + i] = salt[i];
        }
        for (i = innerLen - 4; i < innerLen; i++) {
          inner[i] = 0;
        }
        for (i = 0; i < 64; i++)
          outerKey[i] = 92;
        for (i = 0; i < password.length; i++)
          outerKey[i] ^= password[i];
        function incrementCounter() {
          for (let i2 = innerLen - 1; i2 >= innerLen - 4; i2--) {
            inner[i2]++;
            if (inner[i2] <= 255)
              return;
            inner[i2] = 0;
          }
        }
        while (dkLen >= 32) {
          incrementCounter();
          dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
          dkLen -= 32;
        }
        if (dkLen > 0) {
          incrementCounter();
          dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen));
        }
        return dk;
      }
      function blockmix_salsa8(BY, Yi, r, x, _X) {
        let i;
        arraycopy(BY, (2 * r - 1) * 16, _X, 0, 16);
        for (i = 0; i < 2 * r; i++) {
          blockxor(BY, i * 16, _X, 16);
          salsa20_8(_X, x);
          arraycopy(_X, 0, BY, Yi + i * 16, 16);
        }
        for (i = 0; i < r; i++) {
          arraycopy(BY, Yi + i * 2 * 16, BY, i * 16, 16);
        }
        for (i = 0; i < r; i++) {
          arraycopy(BY, Yi + (i * 2 + 1) * 16, BY, (i + r) * 16, 16);
        }
      }
      function R(a, b) {
        return a << b | a >>> 32 - b;
      }
      function salsa20_8(B, x) {
        arraycopy(B, 0, x, 0, 16);
        for (let i = 8; i > 0; i -= 2) {
          x[4] ^= R(x[0] + x[12], 7);
          x[8] ^= R(x[4] + x[0], 9);
          x[12] ^= R(x[8] + x[4], 13);
          x[0] ^= R(x[12] + x[8], 18);
          x[9] ^= R(x[5] + x[1], 7);
          x[13] ^= R(x[9] + x[5], 9);
          x[1] ^= R(x[13] + x[9], 13);
          x[5] ^= R(x[1] + x[13], 18);
          x[14] ^= R(x[10] + x[6], 7);
          x[2] ^= R(x[14] + x[10], 9);
          x[6] ^= R(x[2] + x[14], 13);
          x[10] ^= R(x[6] + x[2], 18);
          x[3] ^= R(x[15] + x[11], 7);
          x[7] ^= R(x[3] + x[15], 9);
          x[11] ^= R(x[7] + x[3], 13);
          x[15] ^= R(x[11] + x[7], 18);
          x[1] ^= R(x[0] + x[3], 7);
          x[2] ^= R(x[1] + x[0], 9);
          x[3] ^= R(x[2] + x[1], 13);
          x[0] ^= R(x[3] + x[2], 18);
          x[6] ^= R(x[5] + x[4], 7);
          x[7] ^= R(x[6] + x[5], 9);
          x[4] ^= R(x[7] + x[6], 13);
          x[5] ^= R(x[4] + x[7], 18);
          x[11] ^= R(x[10] + x[9], 7);
          x[8] ^= R(x[11] + x[10], 9);
          x[9] ^= R(x[8] + x[11], 13);
          x[10] ^= R(x[9] + x[8], 18);
          x[12] ^= R(x[15] + x[14], 7);
          x[13] ^= R(x[12] + x[15], 9);
          x[14] ^= R(x[13] + x[12], 13);
          x[15] ^= R(x[14] + x[13], 18);
        }
        for (let i = 0; i < 16; ++i) {
          B[i] += x[i];
        }
      }
      function blockxor(S, Si, D, len) {
        for (let i = 0; i < len; i++) {
          D[i] ^= S[Si + i];
        }
      }
      function arraycopy(src, srcPos, dest, destPos, length) {
        while (length--) {
          dest[destPos++] = src[srcPos++];
        }
      }
      function checkBufferish(o) {
        if (!o || typeof o.length !== "number") {
          return false;
        }
        for (let i = 0; i < o.length; i++) {
          const v = o[i];
          if (typeof v !== "number" || v % 1 || v < 0 || v >= 256) {
            return false;
          }
        }
        return true;
      }
      function ensureInteger(value, name) {
        if (typeof value !== "number" || value % 1) {
          throw new Error("invalid " + name);
        }
        return value;
      }
      function _scrypt(password, salt, N, r, p, dkLen, callback) {
        N = ensureInteger(N, "N");
        r = ensureInteger(r, "r");
        p = ensureInteger(p, "p");
        dkLen = ensureInteger(dkLen, "dkLen");
        if (N === 0 || (N & N - 1) !== 0) {
          throw new Error("N must be power of 2");
        }
        if (N > MAX_VALUE / 128 / r) {
          throw new Error("N too large");
        }
        if (r > MAX_VALUE / 128 / p) {
          throw new Error("r too large");
        }
        if (!checkBufferish(password)) {
          throw new Error("password must be an array or buffer");
        }
        password = Array.prototype.slice.call(password);
        if (!checkBufferish(salt)) {
          throw new Error("salt must be an array or buffer");
        }
        salt = Array.prototype.slice.call(salt);
        let b = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
        const B = new Uint32Array(p * 32 * r);
        for (let i = 0; i < B.length; i++) {
          const j = i * 4;
          B[i] = (b[j + 3] & 255) << 24 | (b[j + 2] & 255) << 16 | (b[j + 1] & 255) << 8 | (b[j + 0] & 255) << 0;
        }
        const XY = new Uint32Array(64 * r);
        const V = new Uint32Array(32 * r * N);
        const Yi = 32 * r;
        const x = new Uint32Array(16);
        const _X = new Uint32Array(16);
        const totalOps = p * N * 2;
        let currentOp = 0;
        let lastPercent10 = null;
        let stop = false;
        let state = 0;
        let i0 = 0, i1;
        let Bi;
        const limit = callback ? parseInt(1e3 / r) : 4294967295;
        const nextTick = typeof setImmediate !== "undefined" ? setImmediate : setTimeout;
        const incrementalSMix = function() {
          if (stop) {
            return callback(new Error("cancelled"), currentOp / totalOps);
          }
          let steps;
          switch (state) {
            case 0:
              Bi = i0 * 32 * r;
              arraycopy(B, Bi, XY, 0, Yi);
              state = 1;
              i1 = 0;
            case 1:
              steps = N - i1;
              if (steps > limit) {
                steps = limit;
              }
              for (let i = 0; i < steps; i++) {
                arraycopy(XY, 0, V, (i1 + i) * Yi, Yi);
                blockmix_salsa8(XY, Yi, r, x, _X);
              }
              i1 += steps;
              currentOp += steps;
              if (callback) {
                const percent10 = parseInt(1e3 * currentOp / totalOps);
                if (percent10 !== lastPercent10) {
                  stop = callback(null, currentOp / totalOps);
                  if (stop) {
                    break;
                  }
                  lastPercent10 = percent10;
                }
              }
              if (i1 < N) {
                break;
              }
              i1 = 0;
              state = 2;
            case 2:
              steps = N - i1;
              if (steps > limit) {
                steps = limit;
              }
              for (let i = 0; i < steps; i++) {
                const offset = (2 * r - 1) * 16;
                const j = XY[offset] & N - 1;
                blockxor(V, j * Yi, XY, Yi);
                blockmix_salsa8(XY, Yi, r, x, _X);
              }
              i1 += steps;
              currentOp += steps;
              if (callback) {
                const percent10 = parseInt(1e3 * currentOp / totalOps);
                if (percent10 !== lastPercent10) {
                  stop = callback(null, currentOp / totalOps);
                  if (stop) {
                    break;
                  }
                  lastPercent10 = percent10;
                }
              }
              if (i1 < N) {
                break;
              }
              arraycopy(XY, 0, B, Bi, Yi);
              i0++;
              if (i0 < p) {
                state = 0;
                break;
              }
              b = [];
              for (let i = 0; i < B.length; i++) {
                b.push(B[i] >> 0 & 255);
                b.push(B[i] >> 8 & 255);
                b.push(B[i] >> 16 & 255);
                b.push(B[i] >> 24 & 255);
              }
              const derivedKey = PBKDF2_HMAC_SHA256_OneIter(password, b, dkLen);
              if (callback) {
                callback(null, 1, derivedKey);
              }
              return derivedKey;
          }
          if (callback) {
            nextTick(incrementalSMix);
          }
        };
        if (!callback) {
          while (true) {
            const derivedKey = incrementalSMix();
            if (derivedKey != void 0) {
              return derivedKey;
            }
          }
        }
        incrementalSMix();
      }
      const lib = {
        scrypt: function(password, salt, N, r, p, dkLen, progressCallback) {
          return new Promise(function(resolve, reject) {
            let lastProgress = 0;
            if (progressCallback) {
              progressCallback(0);
            }
            _scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
              if (error) {
                reject(error);
              } else if (key) {
                if (progressCallback && lastProgress !== 1) {
                  progressCallback(1);
                }
                resolve(new Uint8Array(key));
              } else if (progressCallback && progress !== lastProgress) {
                lastProgress = progress;
                return progressCallback(progress);
              }
            });
          });
        },
        syncScrypt: function(password, salt, N, r, p, dkLen) {
          return new Uint8Array(_scrypt(password, salt, N, r, p, dkLen));
        }
      };
      if (typeof exports !== "undefined") {
        module.exports = lib;
      } else if (typeof define === "function" && define.amd) {
        define(lib);
      } else if (root) {
        if (root.scrypt) {
          root._scrypt = root.scrypt;
        }
        root.scrypt = lib;
      }
    })(exports);
  }
});

// node_modules/jssha/dist/sha.js
var require_sha = __commonJS({
  "node_modules/jssha/dist/sha.js"(exports, module) {
    !function(n, r) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = "undefined" != typeof globalThis ? globalThis : n || self).jsSHA = r();
    }(exports, function() {
      "use strict";
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "ARRAYBUFFER not supported by this environment", t = "UINT8ARRAY not supported by this environment";
      function e(n2, r2, t2, e2) {
        var i2, o2, u2, f2 = r2 || [0], s2 = (t2 = t2 || 0) >>> 3, w2 = -1 === e2 ? 3 : 0;
        for (i2 = 0; i2 < n2.length; i2 += 1)
          o2 = (u2 = i2 + s2) >>> 2, f2.length <= o2 && f2.push(0), f2[o2] |= n2[i2] << 8 * (w2 + e2 * (u2 % 4));
        return { value: f2, binLen: 8 * n2.length + t2 };
      }
      function i(i2, o2, u2) {
        switch (o2) {
          case "UTF8":
          case "UTF16BE":
          case "UTF16LE":
            break;
          default:
            throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (i2) {
          case "HEX":
            return function(n2, r2, t2) {
              return function(n3, r3, t3, e2) {
                var i3, o3, u3, f2;
                if (0 != n3.length % 2)
                  throw new Error("String of HEX type must be in byte increments");
                var s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                for (i3 = 0; i3 < n3.length; i3 += 2) {
                  if (o3 = parseInt(n3.substr(i3, 2), 16), isNaN(o3))
                    throw new Error("String of HEX type contains invalid characters");
                  for (u3 = (f2 = (i3 >>> 1) + w2) >>> 2; s2.length <= u3; )
                    s2.push(0);
                  s2[u3] |= o3 << 8 * (a2 + e2 * (f2 % 4));
                }
                return { value: s2, binLen: 4 * n3.length + t3 };
              }(n2, r2, t2, u2);
            };
          case "TEXT":
            return function(n2, r2, t2) {
              return function(n3, r3, t3, e2, i3) {
                var o3, u3, f2, s2, w2, a2, h2, c2, v2 = 0, A2 = t3 || [0], E2 = (e2 = e2 || 0) >>> 3;
                if ("UTF8" === r3)
                  for (h2 = -1 === i3 ? 3 : 0, f2 = 0; f2 < n3.length; f2 += 1)
                    for (u3 = [], 128 > (o3 = n3.charCodeAt(f2)) ? u3.push(o3) : 2048 > o3 ? (u3.push(192 | o3 >>> 6), u3.push(128 | 63 & o3)) : 55296 > o3 || 57344 <= o3 ? u3.push(224 | o3 >>> 12, 128 | o3 >>> 6 & 63, 128 | 63 & o3) : (f2 += 1, o3 = 65536 + ((1023 & o3) << 10 | 1023 & n3.charCodeAt(f2)), u3.push(240 | o3 >>> 18, 128 | o3 >>> 12 & 63, 128 | o3 >>> 6 & 63, 128 | 63 & o3)), s2 = 0; s2 < u3.length; s2 += 1) {
                      for (w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; )
                        A2.push(0);
                      A2[w2] |= u3[s2] << 8 * (h2 + i3 * (a2 % 4)), v2 += 1;
                    }
                else
                  for (h2 = -1 === i3 ? 2 : 0, c2 = "UTF16LE" === r3 && 1 !== i3 || "UTF16LE" !== r3 && 1 === i3, f2 = 0; f2 < n3.length; f2 += 1) {
                    for (o3 = n3.charCodeAt(f2), true === c2 && (o3 = (s2 = 255 & o3) << 8 | o3 >>> 8), w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; )
                      A2.push(0);
                    A2[w2] |= o3 << 8 * (h2 + i3 * (a2 % 4)), v2 += 2;
                  }
                return { value: A2, binLen: 8 * v2 + e2 };
              }(n2, o2, r2, t2, u2);
            };
          case "B64":
            return function(r2, t2, e2) {
              return function(r3, t3, e3, i3) {
                var o3, u3, f2, s2, w2, a2, h2 = 0, c2 = t3 || [0], v2 = (e3 = e3 || 0) >>> 3, A2 = -1 === i3 ? 3 : 0, E2 = r3.indexOf("=");
                if (-1 === r3.search(/^[a-zA-Z0-9=+/]+$/))
                  throw new Error("Invalid character in base-64 string");
                if (r3 = r3.replace(/=/g, ""), -1 !== E2 && E2 < r3.length)
                  throw new Error("Invalid '=' found in base-64 string");
                for (o3 = 0; o3 < r3.length; o3 += 4) {
                  for (s2 = r3.substr(o3, 4), f2 = 0, u3 = 0; u3 < s2.length; u3 += 1)
                    f2 |= n.indexOf(s2.charAt(u3)) << 18 - 6 * u3;
                  for (u3 = 0; u3 < s2.length - 1; u3 += 1) {
                    for (w2 = (a2 = h2 + v2) >>> 2; c2.length <= w2; )
                      c2.push(0);
                    c2[w2] |= (f2 >>> 16 - 8 * u3 & 255) << 8 * (A2 + i3 * (a2 % 4)), h2 += 1;
                  }
                }
                return { value: c2, binLen: 8 * h2 + e3 };
              }(r2, t2, e2, u2);
            };
          case "BYTES":
            return function(n2, r2, t2) {
              return function(n3, r3, t3, e2) {
                var i3, o3, u3, f2, s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                for (o3 = 0; o3 < n3.length; o3 += 1)
                  i3 = n3.charCodeAt(o3), u3 = (f2 = o3 + w2) >>> 2, s2.length <= u3 && s2.push(0), s2[u3] |= i3 << 8 * (a2 + e2 * (f2 % 4));
                return { value: s2, binLen: 8 * n3.length + t3 };
              }(n2, r2, t2, u2);
            };
          case "ARRAYBUFFER":
            try {
              new ArrayBuffer(0);
            } catch (n2) {
              throw new Error(r);
            }
            return function(n2, r2, t2) {
              return function(n3, r3, t3, i3) {
                return e(new Uint8Array(n3), r3, t3, i3);
              }(n2, r2, t2, u2);
            };
          case "UINT8ARRAY":
            try {
              new Uint8Array(0);
            } catch (n2) {
              throw new Error(t);
            }
            return function(n2, r2, t2) {
              return e(n2, r2, t2, u2);
            };
          default:
            throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
        }
      }
      function o(e2, i2, o2, u2) {
        switch (e2) {
          case "HEX":
            return function(n2) {
              return function(n3, r2, t2, e3) {
                var i3, o3, u3 = "0123456789abcdef", f2 = "", s2 = r2 / 8, w2 = -1 === t2 ? 3 : 0;
                for (i3 = 0; i3 < s2; i3 += 1)
                  o3 = n3[i3 >>> 2] >>> 8 * (w2 + t2 * (i3 % 4)), f2 += u3.charAt(o3 >>> 4 & 15) + u3.charAt(15 & o3);
                return e3.outputUpper ? f2.toUpperCase() : f2;
              }(n2, i2, o2, u2);
            };
          case "B64":
            return function(r2) {
              return function(r3, t2, e3, i3) {
                var o3, u3, f2, s2, w2, a2 = "", h2 = t2 / 8, c2 = -1 === e3 ? 3 : 0;
                for (o3 = 0; o3 < h2; o3 += 3)
                  for (s2 = o3 + 1 < h2 ? r3[o3 + 1 >>> 2] : 0, w2 = o3 + 2 < h2 ? r3[o3 + 2 >>> 2] : 0, f2 = (r3[o3 >>> 2] >>> 8 * (c2 + e3 * (o3 % 4)) & 255) << 16 | (s2 >>> 8 * (c2 + e3 * ((o3 + 1) % 4)) & 255) << 8 | w2 >>> 8 * (c2 + e3 * ((o3 + 2) % 4)) & 255, u3 = 0; u3 < 4; u3 += 1)
                    a2 += 8 * o3 + 6 * u3 <= t2 ? n.charAt(f2 >>> 6 * (3 - u3) & 63) : i3.b64Pad;
                return a2;
              }(r2, i2, o2, u2);
            };
          case "BYTES":
            return function(n2) {
              return function(n3, r2, t2) {
                var e3, i3, o3 = "", u3 = r2 / 8, f2 = -1 === t2 ? 3 : 0;
                for (e3 = 0; e3 < u3; e3 += 1)
                  i3 = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255, o3 += String.fromCharCode(i3);
                return o3;
              }(n2, i2, o2);
            };
          case "ARRAYBUFFER":
            try {
              new ArrayBuffer(0);
            } catch (n2) {
              throw new Error(r);
            }
            return function(n2) {
              return function(n3, r2, t2) {
                var e3, i3 = r2 / 8, o3 = new ArrayBuffer(i3), u3 = new Uint8Array(o3), f2 = -1 === t2 ? 3 : 0;
                for (e3 = 0; e3 < i3; e3 += 1)
                  u3[e3] = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255;
                return o3;
              }(n2, i2, o2);
            };
          case "UINT8ARRAY":
            try {
              new Uint8Array(0);
            } catch (n2) {
              throw new Error(t);
            }
            return function(n2) {
              return function(n3, r2, t2) {
                var e3, i3 = r2 / 8, o3 = -1 === t2 ? 3 : 0, u3 = new Uint8Array(i3);
                for (e3 = 0; e3 < i3; e3 += 1)
                  u3[e3] = n3[e3 >>> 2] >>> 8 * (o3 + t2 * (e3 % 4)) & 255;
                return u3;
              }(n2, i2, o2);
            };
          default:
            throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
        }
      }
      var u = 4294967296, f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], s = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], w = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], a = "Chosen SHA variant is not supported", h = "Cannot set numRounds with MAC";
      function c(n2, r2) {
        var t2, e2, i2 = n2.binLen >>> 3, o2 = r2.binLen >>> 3, u2 = i2 << 3, f2 = 4 - i2 << 3;
        if (i2 % 4 != 0) {
          for (t2 = 0; t2 < o2; t2 += 4)
            e2 = i2 + t2 >>> 2, n2.value[e2] |= r2.value[t2 >>> 2] << u2, n2.value.push(0), n2.value[e2 + 1] |= r2.value[t2 >>> 2] >>> f2;
          return (n2.value.length << 2) - 4 >= o2 + i2 && n2.value.pop(), { value: n2.value, binLen: n2.binLen + r2.binLen };
        }
        return { value: n2.value.concat(r2.value), binLen: n2.binLen + r2.binLen };
      }
      function v(n2) {
        var r2 = { outputUpper: false, b64Pad: "=", outputLen: -1 }, t2 = n2 || {}, e2 = "Output length must be a multiple of 8";
        if (r2.outputUpper = t2.outputUpper || false, t2.b64Pad && (r2.b64Pad = t2.b64Pad), t2.outputLen) {
          if (t2.outputLen % 8 != 0)
            throw new Error(e2);
          r2.outputLen = t2.outputLen;
        } else if (t2.shakeLen) {
          if (t2.shakeLen % 8 != 0)
            throw new Error(e2);
          r2.outputLen = t2.shakeLen;
        }
        if ("boolean" != typeof r2.outputUpper)
          throw new Error("Invalid outputUpper formatting option");
        if ("string" != typeof r2.b64Pad)
          throw new Error("Invalid b64Pad formatting option");
        return r2;
      }
      function A(n2, r2, t2, e2) {
        var o2 = n2 + " must include a value and format";
        if (!r2) {
          if (!e2)
            throw new Error(o2);
          return e2;
        }
        if (void 0 === r2.value || !r2.format)
          throw new Error(o2);
        return i(r2.format, r2.encoding || "UTF8", t2)(r2.value);
      }
      var E = function() {
        function n2(n3, r2, t2) {
          var e2 = t2 || {};
          if (this.t = r2, this.i = e2.encoding || "UTF8", this.numRounds = e2.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds)
            throw new Error("numRounds must a integer >= 1");
          this.o = n3, this.u = [], this.h = 0, this.v = false, this.A = 0, this.l = false, this.S = [], this.H = [];
        }
        return n2.prototype.update = function(n3) {
          var r2, t2 = 0, e2 = this.p >>> 5, i2 = this.m(n3, this.u, this.h), o2 = i2.binLen, u2 = i2.value, f2 = o2 >>> 5;
          for (r2 = 0; r2 < f2; r2 += e2)
            t2 + this.p <= o2 && (this.U = this.R(u2.slice(r2, r2 + e2), this.U), t2 += this.p);
          return this.A += t2, this.u = u2.slice(t2 >>> 5), this.h = o2 % this.p, this.v = true, this;
        }, n2.prototype.getHash = function(n3, r2) {
          var t2, e2, i2 = this.T, u2 = v(r2);
          if (this.C) {
            if (-1 === u2.outputLen)
              throw new Error("Output length must be specified in options");
            i2 = u2.outputLen;
          }
          var f2 = o(n3, i2, this.F, u2);
          if (this.l && this.K)
            return f2(this.K(u2));
          for (e2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), i2), t2 = 1; t2 < this.numRounds; t2 += 1)
            this.C && i2 % 32 != 0 && (e2[e2.length - 1] &= 16777215 >>> 24 - i2 % 32), e2 = this.g(e2, i2, 0, this.B(this.o), i2);
          return f2(e2);
        }, n2.prototype.setHMACKey = function(n3, r2, t2) {
          if (!this.k)
            throw new Error("Variant does not support HMAC");
          if (this.v)
            throw new Error("Cannot set MAC key after calling update");
          var e2 = i(r2, (t2 || {}).encoding || "UTF8", this.F);
          this.Y(e2(n3));
        }, n2.prototype.Y = function(n3) {
          var r2, t2 = this.p >>> 3, e2 = t2 / 4 - 1;
          if (1 !== this.numRounds)
            throw new Error(h);
          if (this.l)
            throw new Error("MAC key already set");
          for (t2 < n3.binLen / 8 && (n3.value = this.g(n3.value, n3.binLen, 0, this.B(this.o), this.T)); n3.value.length <= e2; )
            n3.value.push(0);
          for (r2 = 0; r2 <= e2; r2 += 1)
            this.S[r2] = 909522486 ^ n3.value[r2], this.H[r2] = 1549556828 ^ n3.value[r2];
          this.U = this.R(this.S, this.U), this.A = this.p, this.l = true;
        }, n2.prototype.getHMAC = function(n3, r2) {
          var t2 = v(r2);
          return o(n3, this.T, this.F, t2)(this.N());
        }, n2.prototype.N = function() {
          var n3;
          if (!this.l)
            throw new Error("Cannot call getHMAC without first setting MAC key");
          var r2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), this.T);
          return n3 = this.R(this.H, this.B(this.o)), n3 = this.g(r2, this.T, this.p, n3, this.T);
        }, n2;
      }(), l = function(n2, r2) {
        return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r3) {
          n3.__proto__ = r3;
        } || function(n3, r3) {
          for (var t2 in r3)
            Object.prototype.hasOwnProperty.call(r3, t2) && (n3[t2] = r3[t2]);
        }, l(n2, r2);
      };
      function b(n2, r2) {
        if ("function" != typeof r2 && null !== r2)
          throw new TypeError("Class extends value " + String(r2) + " is not a constructor or null");
        function t2() {
          this.constructor = n2;
        }
        l(n2, r2), n2.prototype = null === r2 ? Object.create(r2) : (t2.prototype = r2.prototype, new t2());
      }
      function S(n2, r2) {
        return n2 << r2 | n2 >>> 32 - r2;
      }
      function H(n2, r2) {
        return n2 >>> r2 | n2 << 32 - r2;
      }
      function d(n2, r2) {
        return n2 >>> r2;
      }
      function p(n2, r2, t2) {
        return n2 ^ r2 ^ t2;
      }
      function y(n2, r2, t2) {
        return n2 & r2 ^ ~n2 & t2;
      }
      function m(n2, r2, t2) {
        return n2 & r2 ^ n2 & t2 ^ r2 & t2;
      }
      function U(n2) {
        return H(n2, 2) ^ H(n2, 13) ^ H(n2, 22);
      }
      function R(n2, r2) {
        var t2 = (65535 & n2) + (65535 & r2);
        return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16)) << 16 | 65535 & t2;
      }
      function T(n2, r2, t2, e2) {
        var i2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2);
        return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16)) << 16 | 65535 & i2;
      }
      function C(n2, r2, t2, e2, i2) {
        var o2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2) + (65535 & i2);
        return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16) + (o2 >>> 16)) << 16 | 65535 & o2;
      }
      function F(n2) {
        return H(n2, 7) ^ H(n2, 18) ^ d(n2, 3);
      }
      function K(n2) {
        return H(n2, 6) ^ H(n2, 11) ^ H(n2, 25);
      }
      function g(n2) {
        return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      }
      function L(n2, r2) {
        var t2, e2, i2, o2, u2, f2, s2, w2 = [];
        for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = 0; s2 < 80; s2 += 1)
          w2[s2] = s2 < 16 ? n2[s2] : S(w2[s2 - 3] ^ w2[s2 - 8] ^ w2[s2 - 14] ^ w2[s2 - 16], 1), f2 = s2 < 20 ? C(S(t2, 5), y(e2, i2, o2), u2, 1518500249, w2[s2]) : s2 < 40 ? C(S(t2, 5), p(e2, i2, o2), u2, 1859775393, w2[s2]) : s2 < 60 ? C(S(t2, 5), m(e2, i2, o2), u2, 2400959708, w2[s2]) : C(S(t2, 5), p(e2, i2, o2), u2, 3395469782, w2[s2]), u2 = o2, o2 = i2, i2 = S(e2, 30), e2 = t2, t2 = f2;
        return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2;
      }
      function B(n2, r2, t2, e2) {
        for (var i2, o2 = 15 + (r2 + 65 >>> 9 << 4), f2 = r2 + t2; n2.length <= o2; )
          n2.push(0);
        for (n2[r2 >>> 5] |= 128 << 24 - r2 % 32, n2[o2] = 4294967295 & f2, n2[o2 - 1] = f2 / u | 0, i2 = 0; i2 < n2.length; i2 += 16)
          e2 = L(n2.slice(i2, i2 + 16), e2);
        return e2;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var k = function(n2) {
        function r2(r3, t2, e2) {
          var o2 = this;
          if ("SHA-1" !== r3)
            throw new Error(a);
          var u2 = e2 || {};
          return (o2 = n2.call(this, r3, t2, e2) || this).k = true, o2.K = o2.N, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = L, o2.L = function(n3) {
            return n3.slice();
          }, o2.B = g, o2.g = B, o2.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], o2.p = 512, o2.T = 160, o2.C = false, u2.hmacKey && o2.Y(A("hmacKey", u2.hmacKey, o2.F)), o2;
        }
        return b(r2, n2), r2;
      }(E);
      function Y(n2) {
        return "SHA-224" == n2 ? s.slice() : w.slice();
      }
      function N(n2, r2) {
        var t2, e2, i2, o2, u2, s2, w2, a2, h2, c2, v2, A2, E2 = [];
        for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = r2[5], w2 = r2[6], a2 = r2[7], v2 = 0; v2 < 64; v2 += 1)
          E2[v2] = v2 < 16 ? n2[v2] : T(H(A2 = E2[v2 - 2], 17) ^ H(A2, 19) ^ d(A2, 10), E2[v2 - 7], F(E2[v2 - 15]), E2[v2 - 16]), h2 = C(a2, K(u2), y(u2, s2, w2), f[v2], E2[v2]), c2 = R(U(t2), m(t2, e2, i2)), a2 = w2, w2 = s2, s2 = u2, u2 = R(o2, h2), o2 = i2, i2 = e2, e2 = t2, t2 = R(h2, c2);
        return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2[5] = R(s2, r2[5]), r2[6] = R(w2, r2[6]), r2[7] = R(a2, r2[7]), r2;
      }
      var I = function(n2) {
        function r2(r3, t2, e2) {
          var o2 = this;
          if ("SHA-224" !== r3 && "SHA-256" !== r3)
            throw new Error(a);
          var f2 = e2 || {};
          return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = N, o2.L = function(n3) {
            return n3.slice();
          }, o2.B = Y, o2.g = function(n3, t3, e3, i2) {
            return function(n4, r4, t4, e4, i3) {
              for (var o3, f3 = 15 + (r4 + 65 >>> 9 << 4), s2 = r4 + t4; n4.length <= f3; )
                n4.push(0);
              for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 16)
                e4 = N(n4.slice(o3, o3 + 16), e4);
              return "SHA-224" === i3 ? [e4[0], e4[1], e4[2], e4[3], e4[4], e4[5], e4[6]] : e4;
            }(n3, t3, e3, i2, r3);
          }, o2.U = Y(r3), o2.p = 512, o2.T = "SHA-224" === r3 ? 224 : 256, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
        }
        return b(r2, n2), r2;
      }(E), M = function(n2, r2) {
        this.I = n2, this.M = r2;
      };
      function X(n2, r2) {
        var t2;
        return r2 > 32 ? (t2 = 64 - r2, new M(n2.M << r2 | n2.I >>> t2, n2.I << r2 | n2.M >>> t2)) : 0 !== r2 ? (t2 = 32 - r2, new M(n2.I << r2 | n2.M >>> t2, n2.M << r2 | n2.I >>> t2)) : n2;
      }
      function z(n2, r2) {
        var t2;
        return r2 < 32 ? (t2 = 32 - r2, new M(n2.I >>> r2 | n2.M << t2, n2.M >>> r2 | n2.I << t2)) : (t2 = 64 - r2, new M(n2.M >>> r2 | n2.I << t2, n2.I >>> r2 | n2.M << t2));
      }
      function O(n2, r2) {
        return new M(n2.I >>> r2, n2.M >>> r2 | n2.I << 32 - r2);
      }
      function j(n2, r2, t2) {
        return new M(n2.I & r2.I ^ ~n2.I & t2.I, n2.M & r2.M ^ ~n2.M & t2.M);
      }
      function _(n2, r2, t2) {
        return new M(n2.I & r2.I ^ n2.I & t2.I ^ r2.I & t2.I, n2.M & r2.M ^ n2.M & t2.M ^ r2.M & t2.M);
      }
      function x(n2) {
        var r2 = z(n2, 28), t2 = z(n2, 34), e2 = z(n2, 39);
        return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
      }
      function P(n2, r2) {
        var t2, e2;
        t2 = (65535 & n2.M) + (65535 & r2.M);
        var i2 = (65535 & (e2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2 >>> 16))) << 16 | 65535 & t2;
        return t2 = (65535 & n2.I) + (65535 & r2.I) + (e2 >>> 16), e2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2 >>> 16), new M((65535 & e2) << 16 | 65535 & t2, i2);
      }
      function V(n2, r2, t2, e2) {
        var i2, o2;
        i2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M);
        var u2 = (65535 & (o2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2 >>> 16))) << 16 | 65535 & i2;
        return i2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (o2 >>> 16), o2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2 >>> 16), new M((65535 & o2) << 16 | 65535 & i2, u2);
      }
      function Z(n2, r2, t2, e2, i2) {
        var o2, u2;
        o2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M) + (65535 & i2.M);
        var f2 = (65535 & (u2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2.M >>> 16) + (o2 >>> 16))) << 16 | 65535 & o2;
        return o2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (65535 & i2.I) + (u2 >>> 16), u2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2.I >>> 16) + (o2 >>> 16), new M((65535 & u2) << 16 | 65535 & o2, f2);
      }
      function q(n2, r2) {
        return new M(n2.I ^ r2.I, n2.M ^ r2.M);
      }
      function D(n2) {
        var r2 = z(n2, 1), t2 = z(n2, 8), e2 = O(n2, 7);
        return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
      }
      function G(n2) {
        var r2 = z(n2, 14), t2 = z(n2, 18), e2 = z(n2, 41);
        return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
      }
      var J = [new M(f[0], 3609767458), new M(f[1], 602891725), new M(f[2], 3964484399), new M(f[3], 2173295548), new M(f[4], 4081628472), new M(f[5], 3053834265), new M(f[6], 2937671579), new M(f[7], 3664609560), new M(f[8], 2734883394), new M(f[9], 1164996542), new M(f[10], 1323610764), new M(f[11], 3590304994), new M(f[12], 4068182383), new M(f[13], 991336113), new M(f[14], 633803317), new M(f[15], 3479774868), new M(f[16], 2666613458), new M(f[17], 944711139), new M(f[18], 2341262773), new M(f[19], 2007800933), new M(f[20], 1495990901), new M(f[21], 1856431235), new M(f[22], 3175218132), new M(f[23], 2198950837), new M(f[24], 3999719339), new M(f[25], 766784016), new M(f[26], 2566594879), new M(f[27], 3203337956), new M(f[28], 1034457026), new M(f[29], 2466948901), new M(f[30], 3758326383), new M(f[31], 168717936), new M(f[32], 1188179964), new M(f[33], 1546045734), new M(f[34], 1522805485), new M(f[35], 2643833823), new M(f[36], 2343527390), new M(f[37], 1014477480), new M(f[38], 1206759142), new M(f[39], 344077627), new M(f[40], 1290863460), new M(f[41], 3158454273), new M(f[42], 3505952657), new M(f[43], 106217008), new M(f[44], 3606008344), new M(f[45], 1432725776), new M(f[46], 1467031594), new M(f[47], 851169720), new M(f[48], 3100823752), new M(f[49], 1363258195), new M(f[50], 3750685593), new M(f[51], 3785050280), new M(f[52], 3318307427), new M(f[53], 3812723403), new M(f[54], 2003034995), new M(f[55], 3602036899), new M(f[56], 1575990012), new M(f[57], 1125592928), new M(f[58], 2716904306), new M(f[59], 442776044), new M(f[60], 593698344), new M(f[61], 3733110249), new M(f[62], 2999351573), new M(f[63], 3815920427), new M(3391569614, 3928383900), new M(3515267271, 566280711), new M(3940187606, 3454069534), new M(4118630271, 4000239992), new M(116418474, 1914138554), new M(174292421, 2731055270), new M(289380356, 3203993006), new M(460393269, 320620315), new M(685471733, 587496836), new M(852142971, 1086792851), new M(1017036298, 365543100), new M(1126000580, 2618297676), new M(1288033470, 3409855158), new M(1501505948, 4234509866), new M(1607167915, 987167468), new M(1816402316, 1246189591)];
      function Q(n2) {
        return "SHA-384" === n2 ? [new M(3418070365, s[0]), new M(1654270250, s[1]), new M(2438529370, s[2]), new M(355462360, s[3]), new M(1731405415, s[4]), new M(41048885895, s[5]), new M(3675008525, s[6]), new M(1203062813, s[7])] : [new M(w[0], 4089235720), new M(w[1], 2227873595), new M(w[2], 4271175723), new M(w[3], 1595750129), new M(w[4], 2917565137), new M(w[5], 725511199), new M(w[6], 4215389547), new M(w[7], 327033209)];
      }
      function W(n2, r2) {
        var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2, c2, v2, A2, E2, l2, b2, S2 = [];
        for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], f2 = r2[5], s2 = r2[6], w2 = r2[7], c2 = 0; c2 < 80; c2 += 1)
          c2 < 16 ? (v2 = 2 * c2, S2[c2] = new M(n2[v2], n2[v2 + 1])) : S2[c2] = V((A2 = S2[c2 - 2], E2 = void 0, l2 = void 0, b2 = void 0, E2 = z(A2, 19), l2 = z(A2, 61), b2 = O(A2, 6), new M(E2.I ^ l2.I ^ b2.I, E2.M ^ l2.M ^ b2.M)), S2[c2 - 7], D(S2[c2 - 15]), S2[c2 - 16]), a2 = Z(w2, G(u2), j(u2, f2, s2), J[c2], S2[c2]), h2 = P(x(t2), _(t2, e2, i2)), w2 = s2, s2 = f2, f2 = u2, u2 = P(o2, a2), o2 = i2, i2 = e2, e2 = t2, t2 = P(a2, h2);
        return r2[0] = P(t2, r2[0]), r2[1] = P(e2, r2[1]), r2[2] = P(i2, r2[2]), r2[3] = P(o2, r2[3]), r2[4] = P(u2, r2[4]), r2[5] = P(f2, r2[5]), r2[6] = P(s2, r2[6]), r2[7] = P(w2, r2[7]), r2;
      }
      var $ = function(n2) {
        function r2(r3, t2, e2) {
          var o2 = this;
          if ("SHA-384" !== r3 && "SHA-512" !== r3)
            throw new Error(a);
          var f2 = e2 || {};
          return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = W, o2.L = function(n3) {
            return n3.slice();
          }, o2.B = Q, o2.g = function(n3, t3, e3, i2) {
            return function(n4, r4, t4, e4, i3) {
              for (var o3, f3 = 31 + (r4 + 129 >>> 10 << 5), s2 = r4 + t4; n4.length <= f3; )
                n4.push(0);
              for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 32)
                e4 = W(n4.slice(o3, o3 + 32), e4);
              return "SHA-384" === i3 ? [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M] : [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M, e4[6].I, e4[6].M, e4[7].I, e4[7].M];
            }(n3, t3, e3, i2, r3);
          }, o2.U = Q(r3), o2.p = 1024, o2.T = "SHA-384" === r3 ? 384 : 512, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
        }
        return b(r2, n2), r2;
      }(E), nn = [new M(0, 1), new M(0, 32898), new M(2147483648, 32906), new M(2147483648, 2147516416), new M(0, 32907), new M(0, 2147483649), new M(2147483648, 2147516545), new M(2147483648, 32777), new M(0, 138), new M(0, 136), new M(0, 2147516425), new M(0, 2147483658), new M(0, 2147516555), new M(2147483648, 139), new M(2147483648, 32905), new M(2147483648, 32771), new M(2147483648, 32770), new M(2147483648, 128), new M(0, 32778), new M(2147483648, 2147483658), new M(2147483648, 2147516545), new M(2147483648, 32896), new M(0, 2147483649), new M(2147483648, 2147516424)], rn = [[0, 36, 3, 41, 18], [1, 44, 10, 45, 2], [62, 6, 43, 15, 61], [28, 55, 25, 21, 56], [27, 20, 39, 8, 14]];
      function tn(n2) {
        var r2, t2 = [];
        for (r2 = 0; r2 < 5; r2 += 1)
          t2[r2] = [new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0)];
        return t2;
      }
      function en(n2) {
        var r2, t2 = [];
        for (r2 = 0; r2 < 5; r2 += 1)
          t2[r2] = n2[r2].slice();
        return t2;
      }
      function on(n2, r2) {
        var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2 = [], c2 = [];
        if (null !== n2)
          for (e2 = 0; e2 < n2.length; e2 += 2)
            r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0] = q(r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0], new M(n2[e2 + 1], n2[e2]));
        for (t2 = 0; t2 < 24; t2 += 1) {
          for (o2 = tn(), e2 = 0; e2 < 5; e2 += 1)
            h2[e2] = (u2 = r2[e2][0], f2 = r2[e2][1], s2 = r2[e2][2], w2 = r2[e2][3], a2 = r2[e2][4], new M(u2.I ^ f2.I ^ s2.I ^ w2.I ^ a2.I, u2.M ^ f2.M ^ s2.M ^ w2.M ^ a2.M));
          for (e2 = 0; e2 < 5; e2 += 1)
            c2[e2] = q(h2[(e2 + 4) % 5], X(h2[(e2 + 1) % 5], 1));
          for (e2 = 0; e2 < 5; e2 += 1)
            for (i2 = 0; i2 < 5; i2 += 1)
              r2[e2][i2] = q(r2[e2][i2], c2[e2]);
          for (e2 = 0; e2 < 5; e2 += 1)
            for (i2 = 0; i2 < 5; i2 += 1)
              o2[i2][(2 * e2 + 3 * i2) % 5] = X(r2[e2][i2], rn[e2][i2]);
          for (e2 = 0; e2 < 5; e2 += 1)
            for (i2 = 0; i2 < 5; i2 += 1)
              r2[e2][i2] = q(o2[e2][i2], new M(~o2[(e2 + 1) % 5][i2].I & o2[(e2 + 2) % 5][i2].I, ~o2[(e2 + 1) % 5][i2].M & o2[(e2 + 2) % 5][i2].M));
          r2[0][0] = q(r2[0][0], nn[t2]);
        }
        return r2;
      }
      function un(n2) {
        var r2, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n2, n2 / u & 2097151];
        for (r2 = 6; r2 >= 0; r2--)
          0 === (t2 = o2[r2 >> 2] >>> 8 * r2 & 255) && 0 === e2 || (i2[e2 + 1 >> 2] |= t2 << 8 * (e2 + 1), e2 += 1);
        return e2 = 0 !== e2 ? e2 : 1, i2[0] |= e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
      }
      function fn(n2) {
        return c(un(n2.binLen), n2);
      }
      function sn(n2, r2) {
        var t2, e2 = un(r2), i2 = r2 >>> 2, o2 = (i2 - (e2 = c(e2, n2)).value.length % i2) % i2;
        for (t2 = 0; t2 < o2; t2++)
          e2.value.push(0);
        return e2.value;
      }
      var wn = function(n2) {
        function r2(r3, t2, e2) {
          var o2 = this, u2 = 6, f2 = 0, s2 = e2 || {};
          if (1 !== (o2 = n2.call(this, r3, t2, e2) || this).numRounds) {
            if (s2.kmacKey || s2.hmacKey)
              throw new Error(h);
            if ("CSHAKE128" === o2.o || "CSHAKE256" === o2.o)
              throw new Error("Cannot set numRounds for CSHAKE variants");
          }
          switch (o2.F = 1, o2.m = i(o2.t, o2.i, o2.F), o2.R = on, o2.L = en, o2.B = tn, o2.U = tn(), o2.C = false, r3) {
            case "SHA3-224":
              o2.p = f2 = 1152, o2.T = 224, o2.k = true, o2.K = o2.N;
              break;
            case "SHA3-256":
              o2.p = f2 = 1088, o2.T = 256, o2.k = true, o2.K = o2.N;
              break;
            case "SHA3-384":
              o2.p = f2 = 832, o2.T = 384, o2.k = true, o2.K = o2.N;
              break;
            case "SHA3-512":
              o2.p = f2 = 576, o2.T = 512, o2.k = true, o2.K = o2.N;
              break;
            case "SHAKE128":
              u2 = 31, o2.p = f2 = 1344, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
              break;
            case "SHAKE256":
              u2 = 31, o2.p = f2 = 1088, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
              break;
            case "KMAC128":
              u2 = 4, o2.p = f2 = 1344, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
              break;
            case "KMAC256":
              u2 = 4, o2.p = f2 = 1088, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
              break;
            case "CSHAKE128":
              o2.p = f2 = 1344, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
              break;
            case "CSHAKE256":
              o2.p = f2 = 1088, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
              break;
            default:
              throw new Error(a);
          }
          return o2.g = function(n3, r4, t3, e3, i2) {
            return function(n4, r5, t4, e4, i3, o3, u3) {
              var f3, s3, w2 = 0, a2 = [], h2 = i3 >>> 5, c2 = r5 >>> 5;
              for (f3 = 0; f3 < c2 && r5 >= i3; f3 += h2)
                e4 = on(n4.slice(f3, f3 + h2), e4), r5 -= i3;
              for (n4 = n4.slice(f3), r5 %= i3; n4.length < h2; )
                n4.push(0);
              for (n4[(f3 = r5 >>> 3) >> 2] ^= o3 << f3 % 4 * 8, n4[h2 - 1] ^= 2147483648, e4 = on(n4, e4); 32 * a2.length < u3 && (s3 = e4[w2 % 5][w2 / 5 | 0], a2.push(s3.M), !(32 * a2.length >= u3)); )
                a2.push(s3.I), 0 == 64 * (w2 += 1) % i3 && (on(null, e4), w2 = 0);
              return a2;
            }(n3, r4, 0, e3, f2, u2, i2);
          }, s2.hmacKey && o2.Y(A("hmacKey", s2.hmacKey, o2.F)), o2;
        }
        return b(r2, n2), r2.prototype.j = function(n3, r3) {
          var t2 = function(n4) {
            var r4 = n4 || {};
            return { funcName: A("funcName", r4.funcName, 1, { value: [], binLen: 0 }), customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
          }(n3 || {});
          r3 && (t2.funcName = r3);
          var e2 = c(fn(t2.funcName), fn(t2.customization));
          if (0 !== t2.customization.binLen || 0 !== t2.funcName.binLen) {
            for (var i2 = sn(e2, this.p >>> 3), o2 = 0; o2 < i2.length; o2 += this.p >>> 5)
              this.U = this.R(i2.slice(o2, o2 + (this.p >>> 5)), this.U), this.A += this.p;
            return 4;
          }
          return 31;
        }, r2.prototype.X = function(n3) {
          var r3 = function(n4) {
            var r4 = n4 || {};
            return { kmacKey: A("kmacKey", r4.kmacKey, 1), funcName: { value: [1128353099], binLen: 32 }, customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
          }(n3 || {});
          this.j(n3, r3.funcName);
          for (var t2 = sn(fn(r3.kmacKey), this.p >>> 3), e2 = 0; e2 < t2.length; e2 += this.p >>> 5)
            this.U = this.R(t2.slice(e2, e2 + (this.p >>> 5)), this.U), this.A += this.p;
          this.l = true;
        }, r2.prototype.O = function(n3) {
          var r3 = c({ value: this.u.slice(), binLen: this.h }, function(n4) {
            var r4, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n4, n4 / u & 2097151];
            for (r4 = 6; r4 >= 0; r4--)
              0 == (t2 = o2[r4 >> 2] >>> 8 * r4 & 255) && 0 === e2 || (i2[e2 >> 2] |= t2 << 8 * e2, e2 += 1);
            return i2[(e2 = 0 !== e2 ? e2 : 1) >> 2] |= e2 << 8 * e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
          }(n3.outputLen));
          return this.g(r3.value, r3.binLen, this.A, this.L(this.U), n3.outputLen);
        }, r2;
      }(E);
      return function() {
        function n2(n3, r2, t2) {
          if ("SHA-1" == n3)
            this._ = new k(n3, r2, t2);
          else if ("SHA-224" == n3 || "SHA-256" == n3)
            this._ = new I(n3, r2, t2);
          else if ("SHA-384" == n3 || "SHA-512" == n3)
            this._ = new $(n3, r2, t2);
          else {
            if ("SHA3-224" != n3 && "SHA3-256" != n3 && "SHA3-384" != n3 && "SHA3-512" != n3 && "SHAKE128" != n3 && "SHAKE256" != n3 && "CSHAKE128" != n3 && "CSHAKE256" != n3 && "KMAC128" != n3 && "KMAC256" != n3)
              throw new Error(a);
            this._ = new wn(n3, r2, t2);
          }
        }
        return n2.prototype.update = function(n3) {
          return this._.update(n3), this;
        }, n2.prototype.getHash = function(n3, r2) {
          return this._.getHash(n3, r2);
        }, n2.prototype.setHMACKey = function(n3, r2, t2) {
          this._.setHMACKey(n3, r2, t2);
        }, n2.prototype.getHMAC = function(n3, r2) {
          return this._.getHMAC(n3, r2);
        }, n2;
      }();
    });
  }
});

// node_modules/@pashword/pashword-lib/lib/helpers/bigint.js
var require_bigint = __commonJS({
  "node_modules/@pashword/pashword-lib/lib/helpers/bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.intArrToBigint = void 0;
    var intArrToBigint = (arr) => {
      let bits = 8n;
      if (ArrayBuffer.isView(arr)) {
        bits = BigInt(arr.BYTES_PER_ELEMENT * 8);
      } else {
        arr = new Uint8Array(arr);
      }
      let buffered_result = 0n;
      for (const i of arr.values()) {
        const bint = BigInt(i);
        buffered_result = (buffered_result << bits) + bint;
      }
      return buffered_result;
    };
    exports.intArrToBigint = intArrToBigint;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/@pashword/pashword-lib/lib/helpers/pashword.js
var require_pashword = __commonJS({
  "node_modules/@pashword/pashword-lib/lib/helpers/pashword.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generatePashword = exports.sanitize = void 0;
    var scrypt_js_1 = require_scrypt();
    var jssha_1 = __importDefault(require_sha());
    var bigint_1 = require_bigint();
    var debug_1 = require_browser();
    var _debug = (0, debug_1.debug)("pashword");
    var CPU_COST = 1 << 15;
    var BLOCK_SIZE = 8;
    var PARALLELIZATION_COST = 1;
    var ALLOWED_CHARACTERS = "@#$%&*._!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
    var NUMBERS = "1234567890";
    var VALID_SYMBOLS = "@#$%&*._!";
    var encodeUtf8 = (str) => {
      return new TextEncoder().encode(str);
    };
    var sanitize = (pashword, no_symbols, no_numbers) => {
      const _ = _debug.extend("sanitize");
      _("Initializing SHAKE256");
      const prng_obj = new jssha_1.default("SHAKE256", "TEXT", { encoding: "UTF8" });
      _("Splitting pashword by character");
      const pashword_array = pashword.split("");
      const generateIndex = (hashThis) => {
        prng_obj.update(hashThis);
        const prng = prng_obj.getHash("UINT8ARRAY", { outputLen: 256 });
        const result = (0, bigint_1.intArrToBigint)(prng);
        return Number(result % BigInt(ALPHABET.length));
      };
      if (no_symbols) {
        _("no_symbols is true, removing symbols");
        for (let i = 0; i < pashword_array.length; i++) {
          if (VALID_SYMBOLS.includes(pashword_array[i])) {
            pashword_array[i] = ALPHABET[generateIndex(i.toString() + pashword_array[i])];
          }
        }
      }
      if (no_numbers) {
        _("no_numbers is true, removing numbers");
        for (let i = 0; i < pashword_array.length; i++) {
          if (parseInt(pashword_array[i]) >= 0 && parseInt(pashword_array[i]) <= 9) {
            pashword_array[i] = ALPHABET[generateIndex(i.toString() + pashword_array[i])];
          }
        }
      }
      _("Returning pashword character array as a string");
      return pashword_array.join("");
    };
    exports.sanitize = sanitize;
    var generatePashword = async (to_hash, pashword_length, website, username) => {
      const _ = _debug.extend("generatePashword");
      _("Initializing SHAKE256 and SHA3-512");
      const sha_obj = new jssha_1.default("SHAKE256", "UINT8ARRAY");
      const sha3_obj = new jssha_1.default("SHA3-512", "TEXT", { encoding: "UTF8" });
      _("Hashing to_hash");
      sha3_obj.update(to_hash);
      to_hash = sha3_obj.getHash("HEX");
      _("Generating Scrypt Hash of hashed to_hash, salting with website + username");
      const scrypt_hash = await (0, scrypt_js_1.scrypt)(encodeUtf8(to_hash), encodeUtf8(website + username), CPU_COST, BLOCK_SIZE, PARALLELIZATION_COST, 32);
      _("Scrypt hash generated");
      const generateIndex = (modulo) => {
        sha_obj.update(scrypt_hash);
        const prng = sha_obj.getHash("UINT8ARRAY", { outputLen: 256 });
        const result = (0, bigint_1.intArrToBigint)(prng);
        return Number(result % BigInt(modulo));
      };
      const pickCharacter = (char_set) => {
        return char_set[generateIndex(char_set.length)];
      };
      let pick_index = [];
      if (globalThis?.navigator?.userAgent?.includes("Firefox")) {
        _("Firefox detected, using Array.from with length and entry modifier");
        pick_index = Array.from({ length: pashword_length }, (_2, i) => i);
      } else {
        _("Not Firefox, using Set tmp[i] = i within forloop method");
        for (let i = 0; i < pashword_length; i++) {
          pick_index[i] = i;
        }
      }
      _("Generating pashword from alphabet");
      let remove_index = generateIndex(pick_index.length);
      const index1 = pick_index[remove_index];
      pick_index.splice(remove_index, 1);
      remove_index = generateIndex(pick_index.length);
      const index2 = pick_index[remove_index];
      pick_index.splice(remove_index, 1);
      remove_index = generateIndex(pick_index.length);
      const index3 = pick_index[remove_index];
      pick_index.splice(remove_index, 1);
      remove_index = generateIndex(pick_index.length);
      const index4 = pick_index[remove_index];
      pick_index.splice(remove_index, 1);
      let pashword = "";
      for (let i = 0; i < pashword_length; i++) {
        if (i === index1) {
          pashword += pickCharacter(LOWERCASE_LETTERS);
        } else if (i === index2) {
          pashword += pickCharacter(UPPERCASE_LETTERS);
        } else if (i === index3) {
          pashword += pickCharacter(VALID_SYMBOLS);
        } else if (i === index4) {
          pashword += pickCharacter(NUMBERS);
        } else {
          pashword += pickCharacter(ALLOWED_CHARACTERS);
        }
      }
      _("Returning pashword");
      return pashword;
    };
    exports.generatePashword = generatePashword;
  }
});

// node_modules/@pashword/pashword-lib/lib/index.js
var require_lib = __commonJS({
  "node_modules/@pashword/pashword-lib/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sanitize = exports.generatePashword = void 0;
    var pashword_1 = require_pashword();
    var pashword_2 = require_pashword();
    Object.defineProperty(exports, "generatePashword", { enumerable: true, get: function() {
      return pashword_2.generatePashword;
    } });
    Object.defineProperty(exports, "sanitize", { enumerable: true, get: function() {
      return pashword_2.sanitize;
    } });
    exports.default = pashword_1.generatePashword;
  }
});

// dep:@pashword_pashword-lib
var pashword_pashword_lib_default = require_lib();

export { pashword_pashword_lib_default as default };
