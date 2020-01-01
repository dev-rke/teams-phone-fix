# Teams Phone Fix

**Microsoft released an official [Teams for Linux](https://teams.microsoft.com/downloads) Client. 
It is strongly recommended to use the official application.**

This Firefox addon fixes the error message in Microsoft Teams claiming your browser is not supported 
to do phone calls. It is especially intended for Linux users using Firefox, as Microsoft seems to block browsers which are not in their scope.

This Firefox addon might also run under Windows and MacOS, but i did not test that.
Therefore use this addon at your own risk, as your browser is not offically supported by the Microsoft Teams website.


## How does it work?

The extension fakes the browser's user agent to impersonate as Microsoft Edge or other browsers,
depending on your extension settings.

It will work in the background, so you will not have to interact with it.

## Privacy & Permissions

The extension will not send any data to anywhere except to https://teams.microsoft.com/ 
to modify the user agent. Therefore webRequest and webRequestBlocking permissions are required.

The selected user agent is stored by this application and can be customized in the extension settings page.
To store data, the storage permission is required. 
This feature will only store data when user has changed the user agent.

After installation the browser tab containing https://teams.microsoft.com must be reloaded to work properly. 
To automate this, the extension requires permission to access tabs.

There will be some download statistics of this application collected by Mozilla via https://addons.mozilla.org/.

The source code can be found at [github](https://github.com/dev-rke/teams-phone-fix).


## License

The application is based on the [Mozilla webextension examples](https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter)

Therefore it is licensed under terms and conditions of Mozilla Public License 2.0.
