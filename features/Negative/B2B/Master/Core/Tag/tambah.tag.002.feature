# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah002
Feature: Negative Menambah Master Tag (tambah.tag.002)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data tanpa Mengisi Tag Name
    Given Login B2B berhasil - 002
    And Pergi ke menu Master - 002
    And Pergi ke menu Core - 002
    And Pergi ke menu Tag - 002
    When Muncul list tag - 002
    And Klik Create New - 002
    And Mengisi semua data tanpa Mengisi Tag Name - 002
    Then Klik Save, data tidak berhasil disimpan - 002