@poslogin001
Feature: Negative User Login (login.b2b.003)

  Scenario: User Login B2B menggunakan email diluar format email kurniaremon@.com dan password yg benar
    Given User mengunjungi website B2B QC - 003
    And User menginput email - 003
    And User menginput password - 003
    And User mengklik button Sign In - 003
    Then User diarahkan ke dashboard - 003