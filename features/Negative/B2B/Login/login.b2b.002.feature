@poslogin001
Feature: Negative User Login (login.b2b.002)

  Scenario: User Login B2B menggunakan email diluar format email @kurniaremon@gmail.com dan password yg benar
    Given User mengunjungi website B2B QC - 002
    And User menginput email - 002
    And User menginput password - 002
    And User mengklik button Sign In - 002
    Then User diarahkan ke dashboard - 002