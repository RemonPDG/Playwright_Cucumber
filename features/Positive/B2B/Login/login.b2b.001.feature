@posilogin001
Feature: Positive User Login (login.b2b.001)

  Scenario: Positive User Login B2B menggunakan email dan password yang sudah terdaftar
    Given User mengunjungi website B2B QC - 001
    And User menginput email - 001
    And User menginput password - 001
    And User mengklik button Sign In - 001
    Then User diarahkan ke dashboard - 001