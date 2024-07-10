import assert from 'assert';
import download from 'image-downloader';

/**
 * There is some messy stuff with the async calls here,
 * changing the order of the lines may break stuff
 */
export default class NotionNextJSImageHandler {
    // static imageCount = 1;
    constructor(private notionImageUrl: string) {}
    public async getDownloadedUrl(filename: string): Promise<string> {
        // NotionNextJSImageHandler.imageCount++;
        await this.downloadImage(this.notionImageUrl, filename);
        return '/' + filename;
    }
    private async downloadImage(url: string, name: string): Promise<void> {
        const destination = `../../../public/${name}.jpeg`;
        const options = {
            url: url,
            dest: destination,
        };
        const filename = await this.handleDownload(options);
        console.log(`downloaded to ${filename}`);
    }
    private async handleDownload(options: download.Options) {
        console.log('handing image ' + options.dest);
        try {
            const { filename } = await download.image(options);
            return filename;
        } catch (error) {
            throw new Error(`download error for ${options.dest}, ${error}`);
        }
    }
}
