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
                    // 1. Freshdesk inline script to set up widget settings
                    {
                        tagName: 'script',
                        innerHTML: `
              window.fwSettings={
                'widget_id': 159000000382
              };
              !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()
            `,
                    },
                    // 2. Freshdesk external script, loaded with async and defer
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'text/javascript',
                            src: 'https://widget.freshworks.com/widgets/159000000382.js',
                            async: true,
                            defer: true,
                        },
                    },
                ],
            };
        },
    };
}