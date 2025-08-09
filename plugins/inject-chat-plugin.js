// plugins/inject-chat-plugin.js

export default function injectChatPlugin(context, options) {
    return {
        // A unique name for your plugin
        name: 'docusaurus-inject-chat-plugin',

        // The injectHtmlTags lifecycle API
        injectHtmlTags({content}) {
            return {
                // Injects tags before the closing </body> tag
                postBodyTags: [
                    // The new, correct Freshworks widget script
                    {
                        tagName: 'script',
                        attributes: {
                            src: '//fw-cdn.com/14008595/5883685.js',
                            chat: 'true',
                        },
                    },
                ],
            };
        },
    };
}