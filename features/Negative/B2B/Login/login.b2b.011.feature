@poslogin001
Feature: Negative User Login (login.b2b.011)

  Scenario: User Login B2B menggunakan email  karakter spesial dan password yang valid
    Given User mengunjungi website B2B QC - 011
    And User menginput email - 011
    And User menginput password - 011
    And User mengklik button Sign In - 011
    Then User diarahkan ke dashboard - 011