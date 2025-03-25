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
    # Then I should see the submitted details



    # Scenario: Filling out the text box form
    #     Given I am on the text box page
    #     When I enter 'John Doe' in the full name field
    #     And I enter 'johndoe@example.com' in the email field
    #     And I enter '123 Main St' in the current address field
    #     And I enter '456 Secondary St' in the permanent address field
    #     And I submit the form
    #     Then I should see the output containing 'John Doe'

    # Scenario: Selecting checkboxes
    #     Given I am on the checkbox page
    #     When I expand all checkboxes
    #     And I select the 'Home' checkbox
    #     Then the 'Home' checkbox should be selected

    # Scenario: Selecting a radio button
    #     Given I am on the radio button page
    #     When I select the 'Yes' radio button
    #     Then the 'Yes' radio button should be selected
