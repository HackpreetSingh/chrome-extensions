## Change to make this plugin working:

 We need to update username and password in the file at location: workers/injector.js as below: 
 > For example, if your username is "KaranRocks" and password is "ABC12345", then change first 2 lines as:
 > Before:
    '''
    var username = "Your Username";
    var password = "Your Password";
    '''

 > After:
    '''
    var username = "KaranRocks";
    var password = "ABC12345";
    '''
