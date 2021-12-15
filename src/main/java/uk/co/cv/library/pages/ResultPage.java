package uk.co.cv.library.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.cv.library.utility.Utility;

public class ResultPage extends Utility {

public ResultPage(){
    { PageFactory.initElements(driver, this);}
}

    @CacheLookup
    @FindBy(xpath = "//header[@class='search-header search-card']")
    WebElement resultText;

public String getRestulText(String result){
    return getTextFromElement(resultText);
}

}
