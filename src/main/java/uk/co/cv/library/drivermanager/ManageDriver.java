package uk.co.cv.library.drivermanager;

import uk.co.cv.library.propertyreader.PropertyReader;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

import java.time.Duration;

public class ManageDriver {
        private static final Logger log = LogManager.getLogger(ManageDriver.class.getName());

        public static WebDriver driver;
        public String baseUrl = PropertyReader.getInstance().getProperty("baseUrl");

        public ManageDriver()
        {
            PageFactory.initElements(driver, this);
            PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/main/java/uk/co/cv/library/logs");
        }

        public void selectBrowser(String browser) {
            if (browser.equalsIgnoreCase("chrome")) {
                WebDriverManager.chromedriver().setup();
               log.info("Launching chrome browser");
                driver = new ChromeDriver();
            } else if (browser.equalsIgnoreCase("firefox")) {
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
            } else if (browser.equalsIgnoreCase("ie")) {
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver();
            } else {
                System.out.println("Wrong browser name");
            }
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            driver.get(baseUrl);
        }

        public void closeBrowser() {
            if (driver != null) {
                driver.quit();
            }
        }
    }