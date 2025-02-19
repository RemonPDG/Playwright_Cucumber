@poslogin001
Feature: Negative User Login (login.b2b.001)

  Scenario: User Login B2B menggunakan email diluar format email kurniaremon dan password yg benar
    Given User mengunjungi website B2B QC - 001
    And User menginput email - 001
    And User menginput password - 001
    And User mengklik button Sign In - 001
    Then User diarahkan ke dashboard - 001