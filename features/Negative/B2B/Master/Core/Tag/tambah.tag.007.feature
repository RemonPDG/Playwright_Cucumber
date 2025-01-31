# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah007
Feature: Negative Menambah Master Tag (tambah.tag.007)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data ,Pada Tag Name diisi dengan data yang tersave sebelumnya
    Given Login B2B berhasil - 007
    And Pergi ke menu Master - 007
    And Pergi ke menu Core - 007
    And Pergi ke menu Tag - 007
    When Muncul list tag - 007
    And Klik Create New - 007
    And Mengisi semua data ,Pada Tag Name diisi dengan data yang tersave sebelumnya - 007
    Then Klik Save, data tidak berhasil disimpan - 007