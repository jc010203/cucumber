$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Cash Withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 503816137,
  "status": "passed"
});
formatter.before({
  "duration": 430754,
  "status": "passed"
});
formatter.before({
  "duration": 12087051,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "my account has been credited with $100.00",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I withdraw $20",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "$20 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be $80.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "$100.00",
      "offset": 34
    }
  ],
  "location": "AccountSteps.myAccountHasBeenCreditedWith$(Money)"
});
formatter.result({
  "duration": 142116479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "TellerSteps.iWithdraw$(int)"
});
formatter.result({
  "duration": 48309338339,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(/Applications/Firefox.app/Contents/MacOS/firefox-bin) on port 7055; process output follows: \nilla.org.xpi\n1500490165956\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 2.0\n1500490165956\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/e10srollout@mozilla.org.xpi\n1500490165957\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/e10srollout@mozilla.org.xpi\n1500490165960\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.50\n1500490165961\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/firefox@getpocket.com.xpi\n1500490165962\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/firefox@getpocket.com.xpi\n1500490165967\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\n1500490165978\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database /var/folders/wq/9y14jyk568b84wclc9f0j6kskx7r4k/T/anonymous3838941190369360752webdriver-profile/extensions.json\n1500490165979\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/screenshots@mozilla.org.xpi\n1500490165979\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/screenshots@mozilla.org.xpi\n1500490165982\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\n1500490165983\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/webcompat@mozilla.org.xpi\n1500490165983\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/webcompat@mozilla.org.xpi\n1500490165986\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\n1500490165993\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\n1500490165994\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\n1500490165994\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\n1500490165994\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\n1500490165994\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\n1500490165995\taddons.manager\tDEBUG\tStarting provider: GMPProvider\n1500490166000\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\n1500490166001\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\n1500490166001\taddons.manager\tDEBUG\tStarting provider: PluginProvider\n1500490166001\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\n1500490166002\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\n1500490166002\taddons.manager\tDEBUG\tCompleted startup sequence\n1500490166427\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\n1500490166427\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\n1500490166432\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\n1500490166448\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\n1500490166448\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\n1500490166448\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\n1500490166612\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\n1500490166612\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\n1500490166613\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\n2017-07-19 13:49:28.549 plugin-container[28105:224138] *** CFMessagePort: bootstrap_register(): failed 1100 (0x44c) \u0027Permission denied\u0027, port \u003d 0x923b, name \u003d \u0027com.apple.tsm.portname\u0027\nSee /usr/include/servers/bootstrap_defs.h for the error codes.\n2017-07-19 13:49:28.552 plugin-container[28105:224138] *** CFMessagePort: bootstrap_register(): failed 1100 (0x44c) \u0027Permission denied\u0027, port \u003d 0x9503, name \u003d \u0027com.apple.CFPasteboardClient\u0027\nSee /usr/include/servers/bootstrap_defs.h for the error codes.\n\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027ALLI-MAC-170404A.local\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.4\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\n\tat support.KnowsTheDomain.getWebDriver(KnowsTheDomain.java:50)\n\tat support.KnowsTheDomain.getTeller(KnowsTheDomain.java:34)\n\tat nicebank.TellerSteps.iWithdraw$(TellerSteps.java:25)\n\tat ✽.When I withdraw $20(cash_withdrawal.feature:4)\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nilla.org.xpi\n1500490165956\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 2.0\n1500490165956\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/e10srollout@mozilla.org.xpi\n1500490165957\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/e10srollout@mozilla.org.xpi\n1500490165960\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.50\n1500490165961\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/firefox@getpocket.com.xpi\n1500490165962\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/firefox@getpocket.com.xpi\n1500490165967\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\n1500490165978\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database /var/folders/wq/9y14jyk568b84wclc9f0j6kskx7r4k/T/anonymous3838941190369360752webdriver-profile/extensions.json\n1500490165979\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/screenshots@mozilla.org.xpi\n1500490165979\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/screenshots@mozilla.org.xpi\n1500490165982\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\n1500490165983\taddons.xpi\tDEBUG\tRegistering manifest for /Applications/Firefox.app/Contents/Resources/browser/features/webcompat@mozilla.org.xpi\n1500490165983\taddons.xpi\tDEBUG\tLoading bootstrap scope from /Applications/Firefox.app/Contents/Resources/browser/features/webcompat@mozilla.org.xpi\n1500490165986\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\n1500490165993\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\n1500490165994\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\n1500490165994\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\n1500490165994\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\n1500490165994\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\n1500490165995\taddons.manager\tDEBUG\tStarting provider: GMPProvider\n1500490166000\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\n1500490166001\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\n1500490166001\taddons.manager\tDEBUG\tStarting provider: PluginProvider\n1500490166001\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\n1500490166002\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\n1500490166002\taddons.manager\tDEBUG\tCompleted startup sequence\n1500490166427\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\n1500490166427\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\n1500490166432\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\n1500490166448\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\n1500490166448\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\n1500490166448\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\n1500490166612\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\n1500490166612\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\n1500490166613\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\n2017-07-19 13:49:28.549 plugin-container[28105:224138] *** CFMessagePort: bootstrap_register(): failed 1100 (0x44c) \u0027Permission denied\u0027, port \u003d 0x923b, name \u003d \u0027com.apple.tsm.portname\u0027\nSee /usr/include/servers/bootstrap_defs.h for the error codes.\n2017-07-19 13:49:28.552 plugin-container[28105:224138] *** CFMessagePort: bootstrap_register(): failed 1100 (0x44c) \u0027Permission denied\u0027, port \u003d 0x9503, name \u003d \u0027com.apple.CFPasteboardClient\u0027\nSee /usr/include/servers/bootstrap_defs.h for the error codes.\n\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\n\tat support.KnowsTheDomain.getWebDriver(KnowsTheDomain.java:50)\n\tat support.KnowsTheDomain.getTeller(KnowsTheDomain.java:34)\n\tat nicebank.TellerSteps.iWithdraw$(TellerSteps.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:113)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "CashSlotSteps.$ShouldBeDispensed(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$80.00",
      "offset": 36
    }
  ],
  "location": "AccountSteps.theBalanceOfMyAccountShouldBe$(Money)"
});
formatter.result({
  "status": "skipped"
});
