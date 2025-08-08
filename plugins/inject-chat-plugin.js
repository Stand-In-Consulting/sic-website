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
                    // External script for jQuery
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://code.jquery.com/jquery-3.6.0.min.js',
                        },
                    },
                    // External script for the chat
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://support.standinconsulting.com/assets/chat/chat.min.js',
                        },
                    },
                    // Inline script to initialize the chat
                    {
                        tagName: 'script',
                        innerHTML: `
              $(function() {
                new ZammadChat({
                  title: '<strong>Need Support?</strong>',
                  background: 'rgb(206,32,40)',
                  fontSize: '12px',
                  chatId: 1
                });
              });
            `,
                    },
                ],
            };
        },
    };
}