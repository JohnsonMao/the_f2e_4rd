export default function getAssetsFile(url) {
    return new URL(url, import.meta.url)
}