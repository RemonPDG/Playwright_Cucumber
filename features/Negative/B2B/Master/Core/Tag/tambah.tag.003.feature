# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah003
Feature: Negative Menambah Master Tag (tambah.tag.003)

  Scenario: Negative Menambahkan Tag Baru di Master Tag dengan Mengisi semua data ,Pada Tag Name diisi 300 karakter
    Given Login B2B berhasil
    And Pergi ke menu Master
    And Pergi ke menu Core
    And Pergi ke menu Tag
    When Muncul list tag
    And Klik Create New
    And Mengisi semua data ,Pada Tag Name diisi 300 karakter
    Then Klik Save, data tidak berhasil disimpan