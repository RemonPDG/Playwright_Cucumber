# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@tambah2
Feature: Menambah Master Tag tidak mengisi remarks

  Scenario: Menambahkan Tag Baru di Master Tag tidak mengisi remarks
    Given Login berhasil - 002
    And Pergi ke Master - 002
    And Pergi ke Core - 002
    And Pergi ke Tag - 002
    When Saya melihat tampilan list tag - 002
    And Klik Create New - 002
    And Isi datanya - 002
    Then Klik Save, dan hasil berhasil - 002