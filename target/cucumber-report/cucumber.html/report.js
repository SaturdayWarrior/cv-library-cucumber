$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11950170099,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JonSearchSteps.user_is_on_homepage()"
});
formatter.result({
  "duration": 111919399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 17
    }
  ],
  "location": "JonSearchSteps.enterJobTitle(String)"
});
formatter.result({
  "duration": 116684200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 16
    }
  ],
  "location": "JonSearchSteps.enterLocation(String)"
});
formatter.result({
  "duration": 81802899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 17
    }
  ],
  "location": "JonSearchSteps.selectDistance(String)"
});
formatter.result({
  "duration": 142124400,
  "status": "passed"
});
formatter.match({
  "location": "JonSearchSteps.clickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 102986000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 17
    }
  ],
  "location": "JonSearchSteps.enterSalaryMin(String)"
});
formatter.result({
  "duration": 141407600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 17
    }
  ],
  "location": "JonSearchSteps.enterSalaryMax(String)"
});
formatter.result({
  "duration": 105345899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 19
    }
  ],
  "location": "JonSearchSteps.selectSalaryType(String)"
});
formatter.result({
  "duration": 67848700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 16
    }
  ],
  "location": "JonSearchSteps.selectJobType(String)"
});
formatter.result({
  "duration": 89595400,
  "status": "passed"
});
formatter.match({
  "location": "JonSearchSteps.clickOnFindJobsButton()"
});
formatter.result({
  "duration": 108583700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 19
    }
  ],
  "location": "JonSearchSteps.verifyTheResult(String)"
});
formatter.result({
  "duration": 4354298300,
  "status": "passed"
});
formatter.after({
  "duration": 801860900,
  "status": "passed"
});
});