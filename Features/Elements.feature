Feature: Demo QA Elements Functions

    Scenario: Validate Textbox
        Given Open the Landing Page
        When Click on the Elements Tile
        And Click on the TextBox Menu
        Then I should be on the TextBox page
        When Fill the TextBox with 'Veda SV', 'vedashreesv12@gmail.com', '169/1 Aadhidri', 'Big Bum Sandra'
        Then Verify the TextBox form got submitted
        Then Verify the TextBox form got submitted in detail
        Then Sleep for 5 seconds


    Scenario: Validate CheckBox - Expand All Collapse All
        Given Open the Landing Page
        When Click on the Elements Tile
        And Click on the CheckBox Menu
        Then I am on the CheckBox Page
        When Click on Expand All and Verify
        When Click on Collapse All and Verify
        When Click on Expand Home and Verify
        When Click on Collapse Home and Verify



# Scenario: Selecting checkboxes
#     Given I am on the checkbox page
#     When I expand all checkboxes
#     And I select the 'Home' checkbox
#     Then the 'Home' checkbox should be selected

# Scenario: Selecting a radio button
#     Given I am on the radio button page
#     When I select the 'Yes' radio button
#     Then the 'Yes' radio button should be selected
