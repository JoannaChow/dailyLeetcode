/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    const splited = longUrl.split("/");
    const path = splited.splice(3).join("/");
    return `${splited.join("/")}/${btoa(path)}`;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    const splited = shortUrl.split("/");
    const path = splited.splice(3).join("/");
    return `${splited.join("/")}/${atob(path)}`;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */