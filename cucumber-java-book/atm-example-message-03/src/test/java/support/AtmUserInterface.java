/***
 * Excerpted from "The Cucumber for Java Book",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/srjcuc for more book information.
***/
package support;

import org.openqa.selenium.By;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import nicebank.Account;
import nicebank.Teller;

import hooks.ServerHooks;

class AtmUserInterface implements Teller {
    
    private final EventFiringWebDriver webDriver;

    public AtmUserInterface(EventFiringWebDriver webDriver){
        this.webDriver = webDriver;
    }
    
    public void withdrawFrom(Account account, int dollars) {
        webDriver.get("http://localhost:" + ServerHooks.PORT);
        webDriver.findElement(By.id("amount"))
                 .sendKeys(String.valueOf(dollars));
        webDriver.findElement(By.id("withdraw")).click();
    }
}
