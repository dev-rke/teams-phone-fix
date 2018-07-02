# Teams Phone Fix

This application fixes the error message in Microsoft Teams that your browser is not supported 
to do to phone calls.

It is especially intended for Linux users, as Microsoft seems to block browsers which are not in their scope.
Furthermore Linux users have no ability to use a native Desktop client.

There is a vote for a [native Linux Desktop Client](https://microsoftteams.uservoice.com/forums/555103-public/suggestions/16911565-linux-client), but 
unfortunately Microsoft does not have a priority on that.

It might also run under Windows and MacOS, but i did not test that.

Use it at your own risk, as your browser is not offically supported by Microsoft.



## How does it work?

The application fakes the browser's user agent to impersonate as Microsoft Edge.

It will work in the background, so you will not have to interact with it.



## Privacy

The application will not send any data to anywhere except to https://teams.microsoft.com/ 
to modify the user agent.

No user data is stored by this application.

There will be some download statistics of this application by Mozilla via https://addons.mozilla.org/.



## License

The application is based on the [Mozilla webextension examples](https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter)

Therefore it is licensed under terms and conditions of Mozilla Public License 2.0.
