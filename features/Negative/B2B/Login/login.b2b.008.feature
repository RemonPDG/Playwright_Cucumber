@poslogin001
Feature: Negative User Login (login.b2b.008)

  Scenario: User Login B2B menggunakan email tidak valid dan password tidak valid
    Given User mengunjungi website B2B QC - 008
    And User menginput email tidak valid - 008
    And User menginput password tidak valid - 008
    And User mengklik button Sign In - 008
    Then User diarahkan ke dashboard - 008