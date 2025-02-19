@poslogin001
Feature: Negative User Login (login.b2b.004)

  Scenario: User Login B2B menggunakan email diluar format email kurniaremon@gmail,com dan password yg benar
    Given User mengunjungi website B2B QC - 004
    And User menginput email - 004
    And User menginput password - 004
    And User mengklik button Sign In - 004
    Then User diarahkan ke dashboard - 004