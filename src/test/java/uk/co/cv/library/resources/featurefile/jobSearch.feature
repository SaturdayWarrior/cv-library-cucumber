Feature: Job Search Test

  Scenario Outline: verify Job Search Result Using Different Data Set
    Given User is on homepage
    When enter job title "<jobTitle>"
    And enter Location "<location>"
    And select distance "<distance>"
    And click on more Search Options Link
    And enter salaryMin "<salaryMin>"
    And enter salaryMax "<salaryMax>"
    And select salaryType "<salaryType>"
    And select jobType "<jobType>"
    And click on Find Jobs button
    Then verify the result "<result>"

    Examples:

      | jobTitle | location | distance      | salaryMin | salaryMax | salaryType | jobType   | result                                      |
      | Tester   | Harrow   | up to 5 miles | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |


