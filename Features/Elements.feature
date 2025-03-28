Feature: Demo QA Elements Functions

    # Scenario: Validate Textbox
    #     Given Open the Landing Page
    #     When Click on the Elements Tile
    #     And Click on the TextBox Menu
    #     Then I should be on the TextBox page
    #     When Fill the TextBox with 'Veda SV', 'vedashreesv12@gmail.com', '169/1 Aadhidri', 'Big Bum Sandra'
    #     Then Verify the TextBox form got submitted
    #     Then Verify the TextBox form got submitted in detail
    #     Then Sleep for 5 seconds


    # Scenario: Validate CheckBox - Expand All Collapse All
    #     Given Open the Landing Page
    #     When Click on the Elements Tile
    #     And Click on the CheckBox Menu
    #     Then I am on the CheckBox Page
    #     When Click on Expand All and Verify
    #     When Click on Collapse All and Verify

    #     When Click on Expand GrandParent and Verify
    #     Then Check 'GrandParent'
    #     Then Uncheck 'GrandParent'

    # When Click on Expand Parent and Verify
    # Then Check 'Parent'
    # Then Uncheck 'Parent'

    # When Click on Expand Child and Verify
    # Then Check 'Child'
    # Then Uncheck 'Child'
    # When Click on Collapse Child and Verify

    # When Click on Collapse Parent and Verify
    # When Click on Collapse GrandParent and Verify

    # Then Sleep for 5 seconds


    Scenario: Validate RadioButton - Select Radio Button
        Given Open the Landing Page
        When Click on the Elements Tile
        And Click on the RadioButton Menu
        Then I am on the RadioButton Page
        When Select and verify the 'Yes' radio button
        When Select and verify the 'Impressive' radio button
        Then Sleep for 10 seconds


