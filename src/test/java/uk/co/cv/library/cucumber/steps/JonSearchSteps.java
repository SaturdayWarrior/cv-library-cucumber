package uk.co.cv.library.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.cv.library.pages.HomePage;
import uk.co.cv.library.pages.ResultPage;

public class JonSearchSteps {

    @Given("^User is on homepage$")
    public void user_is_on_homepage() {
        System.out.println("i am on home page");
    }

    @When("^enter job title \"([^\"]*)\"$")
    public void enterJobTitle(String jobTitle) {
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^enter Location \"([^\"]*)\"$")
    public void enterLocation(String location) {
        new HomePage().enterLocation(location);

    }

    @And("^select distance \"([^\"]*)\"$")
    public void selectDistance(String distance) {
        new HomePage().selectDistance(distance);
    }

    @And("^click on more Search Options Link$")
    public void clickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^enter salaryMin \"([^\"]*)\"$")
    public void enterSalaryMin(String salaryMin) {
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^enter salaryMax \"([^\"]*)\"$")
    public void enterSalaryMax(String salaryMax) {
        new HomePage().enterMaxSalary(salaryMax);

    }

    @And("^select salaryType \"([^\"]*)\"$")
    public void selectSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^select jobType \"([^\"]*)\"$")
    public void selectJobType(String jobType) {
        new HomePage().selectJobType(jobType);

    }

    @And("^click on Find Jobs button$")
    public void clickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^verify the result \"([^\"]*)\"$")
    public void verifyTheResult(String result) {
        new ResultPage().getRestulText(result);

    }
}
