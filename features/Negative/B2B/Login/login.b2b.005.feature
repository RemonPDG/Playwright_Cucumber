@poslogin001
Feature: Negative User Login (login.b2b.005)

  Scenario: User Login B2B menggunakan email email kosong dan password kosong
    Given User mengunjungi website B2B QC - 005
    And User tidak menginput email - 005
    And User tidak menginput password - 005
    And User mengklik button Sign In - 005
    Then User diarahkan ke dashboard - 005