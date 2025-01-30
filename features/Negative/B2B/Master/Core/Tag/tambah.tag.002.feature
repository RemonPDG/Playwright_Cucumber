# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah002
Feature: Negative Menambah Master Tag (tambah.tag.002)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data tanpa Mengisi Tag Name
    Given Login B2B berhasil
    And Pergi ke menu Master
    And Pergi ke menu Core
    And Pergi ke menu Tag
    When Muncul list tag
    And Klik Create New
    And Mengisi semua data tanpa Mengisi Tag Name
    Then Klik Save, data tidak berhasil disimpan